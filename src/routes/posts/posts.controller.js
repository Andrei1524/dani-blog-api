const { createPost, getPosts, deletePost } = require('../../models/post.model')

async function httpCreatePost(req, res) {
  try {
    const newPost = await createPost(req.body)
    return res.status(200).json(newPost)
  } catch (error) {
    return res.status(422).json({ error: error.message })
  }
}

async function httpGetPosts(req, res) {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    return res.status(422).json({ error: error.message })
  }
}

async function httpDeletePost(req, res) {
  try {
    const payload = {
      id: req.params.id
    }
    await deletePost(payload)
    return res.sendStatus(200)
  } catch (error) {
    return res.status(422).json({ error: error.message })
  }
}

module.exports = {
  httpCreatePost,
  httpGetPosts,
  httpDeletePost
}