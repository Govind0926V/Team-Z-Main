const mongoose=require('mongoose');


const commentschema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
    comment: { type: String, required: true },
    postedAt: { type: Date, default: Date.now, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }, // Parent comment
    rootId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },   // Top-level comment
  });

module.exports=mongoose.model("comment",commentschema);