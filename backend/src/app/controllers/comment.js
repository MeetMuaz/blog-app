const Comment = require('../models/Comments');
const Blog = require('../models/Blog');

exports.createComment = async (req, res) => { 

    const {  name, email, message, blogId } = req.body

    try {

        const blog = await Blog.findOne({ _id: blogId })

        if (!blog) return res.status(400).json({ message: "Post not found!"});

        const comment = await Comment.create({ name, email, message, blogId });
        await comment.save();
        
        blog.comments.push(comment);
        await blog.save();

        res.status(200).json({ message: "Successful", result: comment });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed" });

    }
}