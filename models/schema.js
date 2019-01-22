const Joi=require('joi');

exports.loginschema={
	username:Joi.string().min(5).required(),
	password:Joi.string().min(5).required()	
};

exports.adduserschema={
	name:Joi.string().required(),
	password:Joi.string().min(5).required(),
	mobile_num:Joi.string().min(10).max(10).required(),
	address:Joi.string().required(),
	email:Joi.string().email({ minDomainAtoms: 2 }),
	username:Joi.string().alphanum().min(5).required()
};
