import { validate } from '../helper/postValidations';

export const validatePost = async (req, res, next) => {
  const errors = await validate(req.body);
  if (errors[0]) {
    return res.status(401).json({
      errors
    });
  }
  return next();
};

export default validatePost;
