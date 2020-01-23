import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.JWT_KEY;

const verifyToken = async (req, res, next) => {
  const header = req.headers.authorization;
  if (typeof header !== 'undefined') {
    try {
      const token = header.split(' ')[1];
      req.decoded = await jwt.verify(token, secret);
      next();
    } catch (error) {
      return res.status(401).json({
        message: 'Auth failed'
      });
    }
  } else {
    return res.status(401).json({
      message: 'Token not provided'
    });
  }
};

export default verifyToken;
