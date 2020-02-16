import express from 'express';
import users from '../controllers/users';
import posts from '../controllers/posts';
import comments from '../controllers/comments';
import verifyToken from '../middlewares/verifyToken';
import { isUserValid, isUserAdmin } from '../middlewares/checkAuth';
import { validateSignup, validateSignin, validateEdit } from '../middlewares/userCredentials';
import { validatePost } from '../middlewares/validatePostsCredentials';
import { validateComment } from '../middlewares/validateCommentCredentials';

const app = express.Router();

// Users Routes
app.post('/register', validateSignup, users.userRegister);
app.post('/login', validateSignin, users.userLogin);
app.get('/profile', verifyToken, isUserValid, users.getProfile);
app.put('/editprofile/', users.editProfile);
app.get('/users', verifyToken, isUserAdmin, users.getAllUsers);
app.get('/users/:userId', verifyToken, isUserAdmin, users.getSingleUser);
app.delete('/deleteuser/:userId', verifyToken, isUserAdmin, users.deleteUser);
app.patch('/enableuser/:userId', verifyToken, isUserAdmin, users.enableUser);
app.patch('/disableuser/:userId', verifyToken, isUserAdmin, users.disableUser);

// Posts Routes
app.get('/posts', posts.getPosts);
app.get('/posts/:postId', posts.getSinglePost);
app.post('/posts', verifyToken, isUserValid, validatePost, posts.createPost);
app.get('/myposts', verifyToken, isUserValid, posts.myPosts);
app.get('/myposts/:postId', verifyToken, isUserValid, posts.mySinglePost);
app.put('/myposts/:postId', verifyToken, isUserValid, posts.editMyPost);
app.delete('/myposts/:postId', verifyToken, isUserValid, posts.deleteMyPost);

// Comments Routes
app.post('/comments/:postId', validateComment, comments.createComment);
app.delete('/comments/:postId/:commentId', verifyToken, isUserValid, comments.deleteComment);

export default app;
