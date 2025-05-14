const User = require('../database/models/user.model');

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword
      }
    })
    return newUser.save();
  } catch(e) {
    throw e;
  }
}
exports.findUserPerEmail = (email) => {
    return User.findOne({ 'local.email': email }).exec();
}

exports.findUserPerId = (id) => {
    return User.findOne({ '_id' : id}).exec();
}

exports.findUserPerUsername = (username) => {
  return User.findOne({ username }).exec();
}

exports.getUserTweetsFormAuthorId = (authorId) => {
  return Tweet.find({ author: authorId }).populate('author').exec();
}