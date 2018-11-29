var express = require('express');
var router = express.Router();
var passport = require('passport');
var Order = require('../models/order');
var Cart = require('../models/cart');
var user = require("../models/user");

router.get('/profile', isLoggedIn, isUser, function (req, res, next) {
    var successMsg = req.flash('success')[0];
      Order.find({email: req.user.email}, function(err, orders) {
          if (err) {
              return res.write('Error!');
          }
          var cart;
          orders.forEach(function(order) {
              cart = new Cart(order.cart);
              order.items = cart.generateArray();
          });
          res.render('user/profile', { orders: orders, successMsg: successMsg, noMessages: !successMsg, user: req.user });
      });    
});

router.get('/profile-admin', isLoggedIn, function (req, res, next) {
  var noMatch = null;
  var successMsg = req.flash('success')[0];  
    if(req.query.search) {      
      Order.find({email: req.query.search}, function(err, orders) {
        if(orders.length === 0) {
          noMatch = 'Ese usuario no existe.';
        }
          if (err) {
                return res.write('Error!');
            }
            var cart;
            orders.forEach(function(order) {
                cart = new Cart(order.cart);
                order.items = cart.generateArray();
            });
            res.render('user/profile-admin', { orders: orders, successMsg: successMsg, noMessages: !successMsg, user: req.user, noMatch: noMatch});
        });
      } else {
          Order.find(function(err, orders) {
            if (err) {
                return res.write('Error!');
            }
            var cart;
            orders.forEach(function(order) {
                cart = new Cart(order.cart);
                order.items = cart.generateArray();
            });
            res.render('user/profile-admin', { orders: orders, successMsg: successMsg, noMessages: !successMsg, user: req.user, noMatch: noMatch});
        });
      }  
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function (req, res, next) {  
  next();
});

router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', {title: "eStationery", messages: messages, hasErrors: messages.length > 0, user: req.user});
});

router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/user/signin',
    failureFlash: true
}), function (req, res, next) {
    if (req.session.oldUrl) {
        req.flash('success', 'Bienvenido, ' + req.user.email + "!");
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
	} else {
        req.flash('success', 'Bienvenido, ' + req.user.email + "!");
        res.redirect('/');
    }
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) { 
        return next();
    }
    res.redirect('/');
}

function isAdmin(req, res, next) {
    if (req.user.role === "administrator") { 
        return next();
    }
    res.redirect('/admin');
}

function isUser(req, res, next) {
    if (req.user.role === "usuario") { 
        return next();
    }
    res.redirect('/admin');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}