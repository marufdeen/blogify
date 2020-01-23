import { validate } from '../helper/commentValidations';

export const validateComment = (req, res, next) => {
  const errors = validate(req.body);
  if (errors[0]) {
    return res.status(401).json({
      errors
    });
  }
  return next();
};
export default validateComment;
