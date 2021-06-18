/* eslint-disable no-return-assign */
import bcrypt from 'bcryptjs';
import { User, Post } from '../models';
import createToken from '../helper/createToken';
// import dotenv from 'dotenv';

/* eslint radix: ["error", "as-needed"] */

/* dotenv.config(); */
const saltRounds = 10;

/**
 * @description users controller
 * class users
 */

export default class users {
  /**
     * @description signup a user into users dummy db
     * @method userRegister
     * @param {*} req
     * @param {*} res
     */
  static async userRegister(req, res) {
    let createUser;
    const { firstName, lastName, email, password } = req.body;
    const date = new Date().toDateString();
    await bcrypt.hash(password, saltRounds, async (error, hash) => {
      createUser = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
        enabled: true,
        profile: false,
        role: 0,
        date
      });
      return res.status(201).json({
        message: 'User successfully created',
        token: await createToken(createUser.dataValues)
      });
    });
  }

  /**
     * @description login a user from the users dummy db
     * @method userLogin
     * @param {*} req
     * @param {*} res
     */
  static async userLogin(req, res) {
    const { email, password } = req.body;
    const userFound = await User.findOne({
      where: [{ email }, { enabled: true }]
    });
    if (userFound) {
      await bcrypt.compare(password, userFound.password, (error, result) => {
        if (result) {
          return res.status(200).json({
            message: 'Access granted!',
            token: createToken(userFound)
          });
        }
        return res.status(400).json({
          message: 'Email and password not match!'
        });
      });
    } else {
      return res.status(400).json({
        message: 'Access denied!'
      });
    }
  }

  /**
     * @description fetch all users from users dummy db
     * @method getAllUsers
     * @param {*} req
     * @param {*} res
     */
  static async getAllUsers(req, res) {
    const allUsers = await User.findAll({});
    if (allUsers.length > 0) {
      return res.status(200).json({
        message: 'Success',
        users: allUsers
      });
    }
    return res.status(200).json({
      message: 'No registered user yet!'
    });
  }

  /**
     * @description get single user from users dummy db
     * @method getSingleUser
     * @param {*} req
     * @param {*} res
     */
  static async getSingleUser(req, res) {
    const userId = parseInt(req.params.userId);
    const userFound = await User.findOne({
      where: { id: userId },
      include: [{
        model: Post,
        as: 'Posts',
      }],
    });
    if (userFound) {
      return res.status(200).json({
        message: 'Success',
        user: userFound
      });
    }
    return res.status(404).json({
      message: 'User not found!'
    });
  }

  /**
     * @description Get profile
     * @method getProfile
     * @param {*} req
     * @param {*} res
     */
  static async getProfile(req, res) {
    const { userId } = req.decoded;
    const userFound = await User.findOne({
      where: [{ id: userId }]
    });
    if (userFound) {
      return res.status(200).json({
        message: 'Profile found!',
        userFound
      });
    }
    return res.status(404).json({
      message: 'User not found'
    });
  }

  /**
     * @description Editprofile
     * @method createProfile
     * @param {*} req
     * @param {*} res
     */
  static async createProfile(req, res) {
    const userId = parseInt(req.decoded.userId);
    const userFound = await User.findOne({
      where: { id: userId }
    });
    if (userFound) {
      await userFound.update({
        profile: req.body.profile || userFound.profile,
        profilePicture: req.body.profilePicture || userFound.profilePicture,
        company: req.body.company || userFound.company,
        website: req.body.website || userFound.website,
        location: req.body.location || userFound.location,
        profession: req.body.profession || userFound.profession,
        skills: req.body.skills || userFound.skills,
        github: req.body.github || userFound.github,
        bio: req.body.bio || userFound.bio,
        twitter: req.body.twitter || userFound.twitter,
        facebook: req.body.facebook || userFound.facebook,
        linkedIn: req.body.linkedIn || userFound.linkedIn
      });
      return res.status(200).json({
        message: 'User updated successfully!',
        userFound
      });
    }
    return res.status(404).json({
      message: 'User not found'
    });
  }

  /**
     * @description Edit user details
     * @method editDetails
     * @param {*} req
     * @param {*} res
     */
  static async editDetails(req, res) {
    const userId = parseInt(req.decoded.userId);
    const userFound = await User.findOne({
      where: { id: userId }
    });

    if (userFound) {
      await userFound.update({
        firstName: req.body.firstName || userFound.firstName,
        lastName: req.body.lastName || userFound.lastName,
        email: req.body.email || userFound.email
      });
      return res.status(200).json({
        message: 'User updated successfully!',
        userFound
      });
    }
    return res.status(404).json({
      message: 'User not found'
    });
  }
  /**
     * @description Enable a User from userDB dummy database
     * @method enableUser
     * @param {*} req
     * @param {*} res
     */

  static async enableUser(req, res) {
    const userId = parseInt(req.params.userId);
    const signInId = parseInt(req.decoded.userId);
    const userFound = await User.findOne({
      where: { id: userId }
    });
    if (userFound) {
      if (userFound.dataValues.id === signInId) {
        return res.status(403).json({
          message: 'You can\'t enable yourself'
        });
      }
      await userFound.update({
        enabled: true
      });
      const postFound = await Post.findAll({
        where: [{ userId }, { visible: false }]
      });
      await postFound.forEach((post) => {
        post.update({
          visible: true
        });
      });
      return res.status(200).json({
        message: 'User successfully enabled!'
      });
    }
    return res.status(201).json({
      message: 'User not found!'
    });
  }

  /**
     * @description Disable a User from userDB dummy database
     * @method disableUser
     * @param {*} req
     * @param {*} res
     */

  static async disableUser(req, res) {
    const userId = parseInt(req.params.userId);
    const signInId = parseInt(req.decoded.userId);
    const userFound = await User.findOne({
      where: { id: userId }
    });
    if (userFound) {
      if (userFound.dataValues.id === signInId) {
        return res.status(403).json({
          message: 'You can\'t disable yourself'
        });
      }
      await userFound.update({
        enabled: false
      });
      const postFound = await Post.findAll({
        where: [{ userId }, { visible: true }]
      });
      await postFound.forEach((post) => {
        post.update({
          visible: false
        });
      });
      return res.status(200).json({
        message: 'User successfully disabled!'
      });
    }
    return res.status(201).json({
      message: 'User not found!'
    });
  }

  /**
     * @description Delete User from userDB dummy database
     * @method deleteUser
     * @param {*} req
     * @param {*} res
     */
  static async deleteUser(req, res) {
    const userId = parseInt(req.params.userId);
    const signInId = parseInt(req.decoded.userId);
    const userFound = await User.findOne({
      where: { id: userId }
    });
    if (userFound) {
      if (userFound.id === signInId) {
        return res.status(403).json({
          message: 'You can\'t delete yourself'
        });
      }
      await userFound.destroy();
      return res.status(200).json({
        message: 'User successfully deleted!',
        userFound
      });
    }
    return res.status(201).json({
      message: 'User not found!'
    });
  }
}
