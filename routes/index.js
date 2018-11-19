var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var request = require("request");
var Handlebars = require("handlebars");
var path = require('path');
var async = require('async');
var crypto = require('crypto');
var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order');
var user = require("../models/user");

var transporter = nodemailer.createTransport({
  host: "yourHost",
  port: 2525,
  auth: {
    user: "yourUser",
    pass: "yourPsw"
  },
  tls:{
    rejectUnauthorized:false
  }
});

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
  var noMatch = null;
  var successMsg = req.flash('success')[0];  
  if(req.query.search) {
    var regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Product.find({description: regex}, function(err, products) {      
      if(products.length === 0) {
         noMatch = 'Ese producto no se encuentra. Pruebe con otra palabra, o haga click en "Falta Producto!"';
      }
      res.render("shop/index", {title: 'eStationery', products: products, successMsg: successMsg, noMessages: !successMsg, user: req.user, noMatch: noMatch});
    });
  } else {
    Product.find(function(err, products) {
      res.render("shop/index", {title: 'eStationery', products: products, successMsg: successMsg, noMessages: !successMsg, user: req.user, noMatch: noMatch});
    });
  }
});

//GET new item
router.get("/new", function(req, res) {
  var successMsg = req.flash('success')[0];
  if (req.isAuthenticated() && req.user.isAdmin()) {
	res.render("shop/new", {title: 'eStationery - Nuevo Producto', successMsg: successMsg, noMessages: !successMsg, user: req.user});
  } else {
      res.redirect("/admin");
    }
});

//POST save new item
router.post("/", function(req, res) {
  var title = req.body.title;
  var stock = req.body.stock;
  var minimumStock = req.body.minimumStock;
  var imagePath = req.body.imagePath;
  var description = req.body.description;
  var location = req.body.idProvider;
  var lastModified = Date.now();
  var newProduct = {title: title, stock: stock, imagePath: imagePath, description: description, minimumStock: minimumStock, location: location, lastModified: lastModified};
  Product.create(newProduct, function(err, newProduct) {
    if(err) {
      console.log(err);
    } else {
        req.flash('success', 'Producto creado.');
        res.redirect("/admin");
      }
  });
});

//GET Edit item
router.get("/edit/:id", function(req, res) {
  var successMsg = req.flash('success')[0];
  if (req.isAuthenticated() && req.user.isAdmin) {
    Product.findById(req.params.id, function(err, foundProduct) {
      if(err) {
      } else {
        res.render("shop/edit", {title: 'eStationery - Editar Producto', successMsg: successMsg, noMessages: !successMsg, user: req.user, product: foundProduct});
      }   
    }); 
   } else {
       res.redirect("/");
     }
});

//PUT save edited item
router.put("/:id", function(req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body.product, function(err, updatedProduct) {
    if(err) {
      res.redirect("/admin");
    } else {
        req.flash('success', 'Producto actualizado.');
        res.redirect("/admin");
      }
  });
});

//DELETE delete item
router.delete("/:id", function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/admin");
    } else {
        req.flash('success', 'Producto eliminado de la base de datos.');
        res.redirect("/admin");
    }
  });
});

//GET add item to cart
router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.flash('success', 'Producto agregado al carrito.');
    req.session.cart = cart;
    res.redirect("/");
  });
});

//GET show cart
router.get('/shopping-cart', isLoggedIn, isUser, function(req, res, next) {
  if (!req.session.cart) {
   return res.render('shop/shopping-cart', {products: null, user: req.user});
  }
  Product.find(function(err, stock) {
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', { stock: stock, products: cart.generateArray(), user: req.user });
  });
});

//GET remove one item from same items from cart
router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  req.flash('success', 'Producto eliminado.');
  res.redirect('/shopping-cart');
});

//GET remove all items from same items from cart
router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId);
  req.session.cart = cart;
  req.flash('success', 'Productos eliminados.');
  res.redirect('/shopping-cart');
});

router.get('/remove', function(req, res, next) {
  req.session.cart = null;
  req.flash('success', 'Pedido descartado.');
  res.redirect('/');
});


//MAILER ORIG
router.post('/send', (req, res) => {
  const output = `
Pedido de: ${req.body.user}
---------------------------------------
${req.body.clone}
`;
  
//KEEP IT IN CASE YOU'D USE ATTACHMENTS
//var source = fs.readFileSync(path.join('views/shop/email.html'));
  
  let mailOptions = {
        from: 'yourEmail',
        to: 'yourReceiver',
        subject: 'Nuevo pedido de librería', // Subject line        
        //attachments: [{ path: '/Users/User/shopping cart/views/email/email.html'}]  //IN CASE OF ATACHMENTS
        //html: source
        text: output
    };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
  
  var cart = new Cart(req.session.cart);
  var order = new Order({
    user: req.user,
    email: req.body.user,
    dateOrder: Date.now(),
    cart: cart
  });

  order.save(function(err, result) {
    req.flash('success', 'Pedido enviado.');
    req.session.cart = null;
    res.redirect('/');
  });  
});

//POST mail for missing product
router.post('/missing', (req, res) => {
  const output = `
Pedido de: ${req.body.user}
---------------------------------------
Artículos faltantes:

${req.body.missing}
  `;
  
  let mailOptions = {
    from: 'yourEmail',
    to: 'yourReceiver',
    subject: 'Aviso de artículo faltante de librería', // Subject line 
    text: output
  };  
    
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    req.flash('success', 'Mensaje enviado.');
    res.redirect('/');
  });
  
});

router.get('/admin', isLoggedIn, isAdmin, function (req, res, next) {
  var noMatch = null;
  var successMsg = req.flash('success')[0];
  if(req.query.search) {
    var regex = new RegExp(escapeRegex(req.query.search), 'gi');    
    Product.find({description: regex}, function(err, products) {
      if(products.length === 0) {
         noMatch = 'Ese producto no se encuentra. Pruebe con otra palabra, o cree uno nuevo.';
      }
      if (err) {
        console.log("Error");
        console.log(err);
      } else {
          res.render("user/admin", {title: 'eStationery - Administrator', products: products, successMsg: successMsg, noMessages: !successMsg, user: req.user, noMatch: noMatch});
        }
  });
  } else {
    Product.find(function(err, products) {
      if (err) {
        console.log("Error");
        console.log(err);
      } else {
          res.render("user/admin", {title: 'eStationery - Administrator', products: products, successMsg: successMsg, noMessages: !successMsg, user: req.user, noMatch: noMatch});
        }
    });
  }
});

router.post('/admin/users/:email', isLoggedIn, isAdmin, function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      user.findOne({ email: req.params.email }, function(err, user) {
        if (!user) {
          console.log('No account with that email address exists.');
          return res.redirect('/admin/users');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
	  res.redirect('/reset/' + token);      
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/admin/users');
  });
});

router.get('/reset/:token', isLoggedIn, isAdmin, function(req, res) {
  user.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      console.log('Password reset token is invalid or has expired.');
      return res.redirect('/admin/users');
    }
    res.render('user/reset', {
      user: user
    });
  });
});

router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      user.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          console.log('Password reset token is invalid or has expired.');
          return res.redirect('back');
        }

        user.password = user.encryptPassword(req.body.password);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
          res.redirect('/admin');
        });
      });
    }
  ], function(err) {
    res.redirect('/admin');
  });
});

//POST create user
router.post('/admin/create-user', isLoggedIn, isAdmin, function (req, res, next) {
  req.logout();
  res.redirect('/user/signup');
});

//GET list users
router.get('/users', isLoggedIn, isAdmin, function (req, res, next) {
  var successMsg = req.flash('success')[0];
  user.find(function(err, users) {
    if (err) {
      return res.write('Error!');
    }          
    res.render('user/users', { users: users, successMsg: successMsg, noMessages: !successMsg, user: req.user });
  });
});

//DELETE delete users
router.delete("/users/:id", function(req, res) {
  user.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect("/admin");
    } else {
        req.flash('success', 'Usuario eliminado.');
        res.redirect("/users");
    }
  });
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}

function isAdmin(req, res, next) {
  if (req.user.role === "administrador") {
    return next();
  }
  res.redirect("/");
}

function isUser(req, res, next) {
  if (req.user.role === "usuario") {
    return next();
  }
  res.redirect("/");
}

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
