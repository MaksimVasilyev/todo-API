const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// const { Schema } = require('mongoose');
//const { Types: { Email } } = Schema;  
// const Email = require('mongoose').Schema.Types.Email;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
     required: true
  },
  items: {
   type: [String],
    default: []
  }
});
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);

module.exports = User;
