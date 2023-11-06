const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ error: "Authorization Token reuired!" });
  const token = authorization.split(" ")[1]; //bearer token toh vo brarer nikalna hai

  try {
    const {_id} = jwt.verify(token, process.env.Secret);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Request is not Authorized!" });
  }
};
module.exports = requireAuth;
