const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = schema({
  username: { type: String, required: true, unique: true},
  avatar: {type: String, default: '/images/unknown_profile.jpeg'},
  local: {
    email: {type: String, required: true},
    password: { type: String, required: true}
  }
});


userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;