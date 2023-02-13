import Joi from "joi";

const username = Joi.string();
const mood = Joi.number().integer().min(1).max(5);
const questionValue = Joi.number().integer().min(0).max(10);
const questionComment = Joi.string();

export const createMoodSchema = Joi.object({
  username: username.required(),
  mood: mood.required(),
  question1: Joi.object({
    value: questionValue.required(),
    comment: questionComment,
  }).required(),
  question2: Joi.object({
    value: questionValue.required(),
    comment: questionComment,
  }).required(),
  question3: Joi.object({
    value: questionValue.required(),
    comment: questionComment,
  }).required(),
  question4: Joi.object({
    value: questionValue.required(),
    comment: questionComment,
  }).required(),
  question5: Joi.object({
    value: questionValue.required(),
    comment: questionComment,
  }).required(),
  additional_comment: questionComment,
});
