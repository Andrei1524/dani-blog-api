const express = require('express')
const postsRouter = express.Router()

// controllers
const { httpCreatePost, httpGetPosts, httpDeletePost } = require('./posts.controller')

postsRouter.post('', httpCreatePost)
postsRouter.get('', httpGetPosts)
postsRouter.delete('/:id', httpDeletePost)

module.exports = postsRouter