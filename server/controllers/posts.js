import { Post, Comment } from '../models';

/* eslint radix: ["error", "as-needed"] */

/**
 * @description posts controller
 * class posts
 */
export default class postController {
  /**
   * @description Create new post
   * @method createPost
   * @param {*} req
   * @param {*} res
   */
  static async createPost(req, res) {
    const userId = parseInt(req.decoded.userId);
    const {
      title,
      content
    } = req.body;
    const date = new Date().toDateString();
    await Post.create({
      userId,
      title,
      content,
      date,
      visible: true
    });
    return res.status(200).json({
      message: 'Post created successfully!',
    });
  }

  /**
   * @description fetch all posts from dummy db
   * @method getPosts
   * @param {*} req
   * @param {*} res
   */
  static async getPosts(req, res) {
    const permittedPosts = await Post.findAll({
      where: { visible: true }
    });
    if (permittedPosts.length > 0) {
      return res.status(200).json({
        message: 'Posts Found',
        permittedPosts
      });
    }
    return res.status(401).json({
      message: 'No post found. Be the first to create a post'
    });
  }

  /**
   * @description fetch a single post from dummy db
   * @method getSinglePost
   * @param {*} req
   * @param {*} res
   */
  static async getSinglePost(req, res) {
    const postId = parseInt(req.params.postId);
    const postFound = await Post.findOne({
      where: [{ id: postId }, { visible: true }],
      include: [{
        model: Comment,
        as: 'comments'
      }],
    });
    if (postFound) {
      return res.status(200).json({
        message: 'Post Found',
        postFound
      });
    }
    return res.status(404).json({
      message: 'Post not found'
    });
  }

  /**
   * @description View all of my posts
   * @method myPosts
   * @param {*} req
   * @param {*} res
   */
  static async myPosts(req, res) {
    const userId = parseInt(req.decoded.userId);
    const postsFound = await Post.findAll({
      where: [{ userId }, { visible: true }]
    });
    if (postsFound) {
      return res.status(200).json({
        message: 'Posts Found',
        postsFound
      });
    }
    return res.status(404).json({
      message: 'Sorry!, you don\'t have any post yet. Try to create post'
    });
  }

  /**
   * @description View each post
   * @method mySinglePost
   * @param {*} req
   * @param {*} res
   */
  static async mySinglePost(req, res) {
    const userId = parseInt(req.decoded.userId);
    const postId = parseInt(req.params.postId);
    const postFound = await Post.findOne({
      where: [{ id: postId }, { userId }, { visible: true }],
      include: [{
        model: Comment,
        as: 'comments'
      }],
    });
    if (postFound) {
      return res.status(200).json({
        message: 'Post Found',
        postFound
      });
    }
    return res.status(401).json({
      message: 'Post not found'
    });
  }

  /**
   * @description Edit post
   * @method editMyPost
   * @param {*} req
   * @param {*} res
   */
  static async editMyPost(req, res) {
    const postId = parseInt(req.params.postId);
    const userId = parseInt(req.decoded.userId);
    const postFound = await Post.findOne({
      where: [{ id: postId }, { userId }, { visible: true }]
    });
    if (postFound) {
      await postFound.update({
        title: req.body.title || postFound.title,
        content: req.body.content || postFound.content
      });
      return res.status(200).json({
        message: 'Post updated successfully!',
        postFound
      });
    }
    return res.status(404).json({
      message: 'Post not found'
    });
  }

  /**
   * @description Delete post
   * @method deleteMyPost
   * @param {*} req
   * @param {*} res
   */
  static async deleteMyPost(req, res) {
    const postId = parseInt(req.params.postId);
    const userId = parseInt(req.decoded.userId);
    const postFound = await Post.findOne({
      where: [{ id: postId }, { userId }, { visible: true }]
    });
    if (postFound) {
      await postFound.destroy();
      return res.status(401).json({
        message: 'Post deleted along with corresponding comments!'
      });
    }
    return res.status(401).json({
      message: 'Post not found'
    });
  }
}
