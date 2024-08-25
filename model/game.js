const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Data-Association');
const gameschema=  mongoose.Schema({
      img:String,
      name:String,
      description:String,
      posts:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}],
      likes:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"user"}
      ]
})

module.exports=mongoose.model("game",gameschema);