// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an instance of Express application
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define schema and model for blog posts
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

// Define schema and model for comments
const commentSchema = new mongoose.Schema({
  content: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

const Comment = mongoose.model('Comment', commentSchema);

// Define routes

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the blog app!');
});

// Route to create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  const newPost = new Post({
    title,
    content,
  });

  newPost.save((error, post) => {
    if (error) {
      console.error('Error saving post:', error);
      res.status(500).send('Error saving post');
    } else {
      res.redirect('/posts/' + post._id);
    }
  });
});

// Route to display a specific blog post
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;

  Post.findById(postId, (error, post) => {
    if (error) {
      console.error('Error finding post:', error);
      res.status(500).send('Error finding post');
    } else {
      Comment.find({ postId }, (error, comments) => {
        if (error) {
          console.error('Error finding comments:', error);
          res.status(500).send('Error finding comments');
        } else {
          res.render('post', { post, comments });
        }
      });
    }
  });
});

// Route to create a new comment
app.post('/comments', (req, res) => {
  const { postId, content } = req.body;

  const newComment = new Comment({
    content,
    postId,
  });

  newComment.save((error, comment) => {
    if (error) {
      console.error('Error saving comment:', error);
      res.status(500).send('Error saving comment');
    } else {
      res.redirect('/posts/' + postId);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
