import mongoose from "mongoose";
const {Schema, model,SchemaTypes} = mongoose;

const blogPostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    createAt:{
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    author:{
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    url:{
        type: String,
        required: false
    },
    comments:[{
        user: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        },
        content: String,
        likes: Number
    }]
});

const BlogModel = model('BlogModel' , blogPostSchema);

export default BlogModel;