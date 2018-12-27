const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);
