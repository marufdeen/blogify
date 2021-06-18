import { validate } from '../helper/commentValidations';

export const validateComment = async (req, res, next) => {
  const errors = await validate(req.body);
  if (errors[0]) {
    return res.status(401).json({
      errors
    });
  }
  return next();
};
export default validateComment;
