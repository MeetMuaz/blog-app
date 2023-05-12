const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Blog', blogSchema);