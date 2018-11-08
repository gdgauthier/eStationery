var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  email: {type: String, required: true},
  dateOrder: {type: Date, required: true},
  cart: {type: Object, required: true}
});

module.exports = mongoose.model('Order', schema);