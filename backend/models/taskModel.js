const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
    _id:{
        type:String,
        // required:[true,"Id is compulsory!"],
        // unique:true,
        // index: {
        //     unique: true,
        //     sparse: true
        //   }  index ka lafda hogaa.
    },
    title:{
        type:String,
        required:[true,"Fill all fields"],
    },
    details:{
        type:String,
        required:[true,"Fill all fields"],
    },
    date:{
        type:String
    },
    deadline:{
        type:String,
        required:[true,"Fill all fields"],
    },
    priority:{
        type:String,
        required:[true,"Fill all fields"],
    },
    status:{
        type:String,
        required:[true,"Fill all fields"],
    },
    bookmark:{
        type:Boolean,
        required:[true,"Fill all fields"],
    }

})

const Task=new mongoose.model('Task',taskSchema);
module.exports=Task;


// {
//     "id":"1",
//     "title":"Testing",
//     "details":"I am trying thunderclient",
//     "date":"22/07/2001",
//     "deadline":"24/07/2001",
//     "priority":"low",
//     "status":"pending",
//     "bookmark":"false"
//   }