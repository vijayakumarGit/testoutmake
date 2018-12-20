const Joi=require('joi');
const {schema}=require('./schema');

module.exports=class validation{
	constructor(reqObj){
		return Joi.validate(reqObj,schema);
	}
};