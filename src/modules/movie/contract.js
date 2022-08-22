const Joi = require("joi");

exports.search = Joi.object({
  value: Joi.string().allow(null, ""),
  filter: Joi.object({
    page: Joi.number().required(),
    limit: Joi.number().required(),
  }),
});
