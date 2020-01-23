import { validate } from '../helper/postValidations';

export const validatePost = (req, res, next) => {
  const errors = validate(req.body);
  if (errors[0]) {
    return res.status(401).json({
      errors
    });
  }
  return next();
};

export default validatePost;
