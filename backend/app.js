const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const taskRoutes=require('./routes/taskRoutes')
const userRouter=require('./routes/userRoutes')
const cors=require('cors');
app.use(cors())   //please setup orgins here later once deployed
app.use(express.json());
app.use('/',userRouter);
app.use('/',taskRoutes);
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("DataBase connected");
    app.listen(PORT, () => {
      console.log("listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });

