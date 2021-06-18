import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import postController from '../../controllers/posts';
import { create, put } from './mockDB/postdetails';

chai.use(chaiHttp);
describe('Test Post Controller', () => {
  let req;
  let res;
  beforeEach(() => {
    req = { body: {}, query: {}, params: { postId: 1 }, decoded: { userId: 1 } };
    res = { status: () => ({ json: (data) => data }) };
  });
  describe('Get All Posts', () => {
    it('should return Posts Found if found',
      async () => {
        const postFound = await postController.getPosts(req, res);
        expect(postFound.message).eql('Posts Found');
        expect(postFound).to.have.keys('message', 'permittedPosts');
        if (postFound == null) {
          expect(postFound.message).eql('No post found. Be the first to create a post');
        }
      });
  });
  describe('Get Single Post', () => {
    it('should return Post Found if found',
      async () => {
        const postFound = await postController.getSinglePost(req, res);
        expect(postFound.message).eql('Post Found');
        expect(postFound).to.have.keys('message', 'postFound');
        if (postFound == null) {
          expect(postFound.message).eql('No post found');
        }
      });
  });
  describe('Create Post', () => {
    it('should return Post created successfully if created',
      async () => {
        req.body = create.complete;
        const postFound = await postController.createPost(req, res);
        expect(postFound.message).eql('Post created successfully!');
      });
  });
  describe('Get My Posts', () => {
    it('should return Posts Found if found',
      async () => {
        const postFound = await postController.myPosts(req, res);
        expect(postFound.message).eql('Posts Found');
        expect(postFound).to.have.keys('message', 'postsFound');
      });
  });
  describe('Get My Single Post', () => {
    it('should return Post Found if found',
      async () => {
        const postFound = await postController.mySinglePost(req, res);
        expect(postFound.message).eql('Post Found');
        expect(postFound).to.have.keys('message', 'postFound');
      });
  });
  describe('Edit My Post', () => {
    it('should return Post updated successfully! if updated',
      async () => {
        req.body = put.correct;
        const postFound = await postController.editMyPost(req, res);
        expect(postFound.message).eql('Post updated successfully!');
        expect(postFound).to.have.keys('message', 'postFound');
      });
  });
  describe('Delete My Post', () => {
    it('should return Post deleted along with corresponding comments! if deleted',
      async () => {
        const postFound = await postController.deleteMyPost(req, res);
        expect(postFound.message).eql('Post deleted along with corresponding comments!');
      });
  });
});
