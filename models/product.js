var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({  
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  minimumStock: {type: Number, requiered: true},
  location: {type: String, requiered: true},
  lastModified: {type: Date, requiered: true },
  stock: {type: Number, required: true},
  tempStock: {type: Number, default: 0, required: true}
});

module.exports = mongoose.model('Product', schema);