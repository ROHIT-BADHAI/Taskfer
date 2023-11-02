const express=require('express');
const Task = require("../models/taskModel");
const TaskRouter=express.Router();


TaskRouter.get("/tasks", async (req, res) => {
    try {
      const getTasks = await Task.find({});
      if (getTasks) return res.status(201).send(getTasks.reverse());
      else return res.status(404).send({ message: "Item not found" });
    } catch (e) {
      console.log("item not present");
      res.status(400).send("item not present");
    }
  });
  
  TaskRouter.get("/tasks/:_id", async (req, res) => {
    try {
      const _id = req.params._id;
      const getTask = await Task.findById(_id);
      if (getTask) return res.status(200).send(getTask);
      else return res.status(404).send({ message: "Item not found" });
    } catch (e) {
      console.log("Item not present");
      res.status(400).send("Item not present");
    }
  });
  
  TaskRouter.post("/tasks", async (req, res) => {
    try {
      const task = new Task({_id:req.body._id,...req.body});
      const addTask = await task.save();
      res.status(200).send(addTask);
    } catch (e) {
      console.log(e.message);
      res.status(400).send({ message: e.message });
    }
  });
  
  TaskRouter.delete("/tasks/:_id", async (req, res) => {
    try {
      const _id = req.params._id;
      const deletedTask = await Task.findByIdAndDelete(_id);
      if (deletedTask) return res.status(200).send(deletedTask);
      else return res.status(404).send({ message: "Item not found" });
    } catch (e) {
      console.log(e.message);
      res.status(400).send({ message: e.message });
    }
  });
  
  TaskRouter.put("/tasks/:_id", async (req, res) => {
    try {
      const _id = req.params._id;
      const updatedData = await Task.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      if (updatedData) return res.status(200).send(updatedData);
      else return res.status(404).send({ message: "Item not found" });
    } catch (e) {
      console.log(e.message);
      res.status(400).send({ message: e.message });
    }
  });

 module.exports=TaskRouter;