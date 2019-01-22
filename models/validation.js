const Joi=require('joi');
const {loginschema,adduserschema}=require('./schema');

module.exports=class validation{
	constructor(){		
	}
	login(reqObj){
		return Joi.validate(reqObj,loginschema,{stripUnknown: true});
	}
	adduser(reqObj){
		return Joi.validate(reqObj,adduserschema,{stripUnknown: true});
	}
};