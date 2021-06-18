import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import userController from '../../controllers/users';
import { signup, login } from './mockDB/userdetails';

chai.use(chaiHttp);

describe('Test User Controller', () => {
  let req;
  let res;
  beforeEach(() => {
    req = { body: {}, query: {}, params: { userId: 1 }, decoded: { userId: 1 } };
    res = { status: () => ({ json: (data) => data }) };
  });
  describe('user Registration', () => {
    it('should return User successfully created',
      async () => {
        req.body = signup.complete;
        const result = await userController.userRegister(req, res);
        expect(result.message).eql('User successfully created');
        expect(result).to.have.keys(['message', 'token']);
        // setImmediate(done);
        // done();
      });
  });
  describe('user Login', () => {
    it.skip('should return Access Granted! if details are correct',
      async () => {
        req.body = login.complete.correct;
        const result = await userController.userLogin(req, res);
        console.log('result: ', result, 'req: ', req);
        expect(result.message).to.be.eql('Access Granted!');
        // expect(result).to.have.keys(['message', 'token']);
      });
    it('should return Invalid Credentials! if details are incorrect',
      async () => {
        req.body = login.complete.incorrect;
        const result = await userController.userLogin(req, res);
        expect(result.message).eql('Invalid Credentials!');
      });
  });
  describe('Get All Users', () => {
    it('should return Success if users are found',
      async () => {
        const userFound = await userController.getAllUsers(req, res);
        expect(userFound.message).eql('Success');
        expect(userFound).to.have.keys(['message', 'users']);
      });
  });
  describe('Get Single User', () => {
    it('should return Success if users are found',
      async () => {
        const userFound = await userController.getSingleUser(req, res);
        expect(userFound.message).eql('Success');
        expect(userFound).to.have.keys(['message', 'user']);
      });
  });
  describe('Edit Profile', () => {
    it('should return Success if users are found',
      async () => {
        const userFound = await userController.editProfile(req, res);
        expect(userFound.message).eql('User updated successfully!');
        expect(userFound).to.have.keys(['message', 'userFound']);
      });
  });

  describe('Delete User', () => {
    it('should return User successfully deleted!, if user is deleted',
      async () => {
        const userFound = await userController.deleteUser(req, res);
        if (req.params.userId === req.decoded.userId) {
          expect(userFound.message).eql('You can\'t delete yourself');
        }
        if (req.params.userId !== req.decoded.userId) {
          expect(userFound.message).eql('User successfully deleted!');
        }
      });
  });
  describe('Enable User', () => {
    it('should return User successfully enabled!, if user is enabled',
      async () => {
        const userFound = await userController.enableUser(req, res);
        if (req.params.userId === req.decoded.userId) {
          expect(userFound.message).eql('You can\'t enable yourself');
        }
        if (req.params.userId !== req.decoded.userId) {
          expect(userFound.message).eql('User successfully enabled!');
        }
      });
  });
  describe('Disable User', () => {
    it('should return User successfully disabled!, if user is disabled',
      async () => {
        const userFound = await userController.disableUser(req, res);
        if (req.params.userId === req.decoded.userId) {
          expect(userFound.message).eql('You can\'t disable yourself');
        }
        if (req.params.userId !== req.decoded.userId) {
          expect(userFound.message).eql('User successfully disabled!');
        }
      });
  });
});
// CRO-6320-BTCA
// +13468887062 azeez  +12147212034 ahmed
