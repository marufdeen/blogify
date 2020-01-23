import { Post, Comment } from '../models';

/* eslint radix: ["error", "as-needed"] */
/**
 * @description comments controler
 * class comments
 */
export default class comments {
  /**
     * @description Create comment into comments dummy db
     * @method createComment
     * @param {*} req
     * @param {*} res
     */
  static async createComment(req, res) {
    const postId = parseInt(req.params.postId);
    const date = new Date().toDateString();
    const postFound = await Post.findOne({
      where: { id: postId }
    });
    if (postFound) {
      const { visitorName, visitorEmail, content } = req.body;
      await Comment.create({
        postId, visitorName, visitorEmail, content, date
      });
      return res.status(200).json({
        message: 'Comment appended successfully!'
      });
    }
    return res.status(403).json({
      message: 'Post not found, comment not appended'
    });
  }

  /**
     * @description Delete comment
     * @method deleteComment
     * @param {*} req
     * @param {*} res
     */
  static async deleteComment(req, res) {
    const userId = parseInt(req.decoded.userId);
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);

    const postFound = await Post.findOne({
      where: [{ id: postId }, { userId }]
    });
    if (postFound) {
      const commentFound = await Comment.findOne({
        where: [{ id: commentId }, { postId }]
      });
      if (commentFound) {
        await commentFound.destroy();
        return res.status(403).json({
          message: 'Comment successfully deleted!'
        });
      }
      return res.status(403).json({
        message: 'No comment found to be deleted'
      });
    }
    return res.status(403).json({
      message: 'Sorry!, you can\'t delete comment from a post you don\'t own'
    });
  }
}
