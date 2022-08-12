import Joi from 'joi';

export const createValidation = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
});
