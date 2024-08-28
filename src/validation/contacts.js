import Joi from 'joi';

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber:Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid("work", "home", "personal").required(),
   UserId: Joi.string().required(),
});

export const updatContactSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber:Joi.string().min(3).max(20),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid("work", "home", "personal"),
});

