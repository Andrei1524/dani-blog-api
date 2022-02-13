const express = require('express')

// ROUTERS
const postsRouter = require('./posts/posts.router')

const api = express.Router()

api.use('/posts', postsRouter)

module.exports = api