const Blog = require('../models/Blog');
const Author = require('../models/Author');


exports.createBlog = async (req, res) => { 

    const {  title, content } = req.body

    try {

        const blog = await Blog.create({ title, content});

        await blog.save();

        res.status(200).json({ message: "Successful", result: blog });

    } catch (error) {

        res.status(500).json({ message: "Failed" });

    }
}

exports.readAllBlog = async (req, res) => {

    try {

        const blog = await Blog.find().populate('comments');

        res.status(200).json({ message: "Successful", result: blog  })
        
    } catch (error) {
        
        res.status(500).json({ message: "Failed" });

    }

}

exports.readOneBlog = async (req, res) => {

    const blogId = req.params.blogId

    try {

        const blog = await Blog.findOne({ _id: blogId }).populate('comments');

        res.status(200).json({ message: "Successful", result: blog  })
        
    } catch (error) {
        
        res.status(500).json({ message: "Failed" });

    }

}