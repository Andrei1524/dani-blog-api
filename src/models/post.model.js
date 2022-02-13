const Post = require('./post.mongo')

async function createPost(payload) {
  try {
    const newPost = await new Post({
      title: payload.title,
      body: payload.body
    })

    return newPost.save()
  } catch (error) {
    throw Error(error)
  }
}

async function getPosts() {
  try {
    return await Post.find({})
  } catch (error) {
    throw Error(error)
  }
}

async function deletePost(payload) {
  try {
    await Post.findOneAndRemove({ '_id': payload.id })
  } catch (error) {
    console
    throw Error(error)
  }
}

module.exports = {
  createPost,
  getPosts,
  deletePost
}