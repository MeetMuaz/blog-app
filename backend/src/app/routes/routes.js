'use strict';

module.exports =  (app) => {

    let blogController = require('../controllers/blog');
    let commentController = require('../controllers/comment');

    // BLOG ROUTES
    app.route('/create-one-blog')
        .post(blogController.createBlog);

    app.route('/read-all-blog')
        .get(blogController.readAllBlog);

    app.route('/read-one-blog/:blogId')
        .get(blogController.readOneBlog);

   // COMMENT ROUTES 
   app.route('/create-one-comment')
        .post(commentController.createComment);

}