const Joi=require('joi');

exports.schema={
	username:Joi.string().min(5).required(),
	password:Joi.string().min(5).required()	
};

