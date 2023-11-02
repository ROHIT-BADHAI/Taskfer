const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  // name:{
  //     type:String,
  //     required:true
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static method signup
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) throw Error("All fields are required!");
  if (!validator.isEmail(email)) throw Error("Enter valid Email!");
  // if(!validator.isStrongPassword(password)) throw Error('Password not Strong!!')
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists!!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

//static method login
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) throw Error("All fields are required!");
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email!");
  }
  const match=await bcrypt.compare(password,user.password)
  if(!match) throw Error("Incorrect password!")
  return user;
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
