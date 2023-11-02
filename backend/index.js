const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb://0.0.0.0:27017/TaskManager";
const PORT = process.env.PORT || 3000;
const taskRoutes=require('./routes/taskRoutes')
const userRouter=require('./routes/userRoutes')
const cors=require('cors');
app.use(cors())   //please setup orgins here later once deployed
app.use(express.json());
app.use('/',taskRoutes);
app.use('/',userRouter);
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

