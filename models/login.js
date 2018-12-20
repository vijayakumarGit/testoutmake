
const validate=require('./validation');

module.exports = class login{
	constructor(req,res){
		const { error } = new validate(req.body);
		if(error){
			return res.status(400).send(error.details[0].message);
		}
		db.collection('user_info').findOne(req.body,(err,result)=>{
			if(err || result === null) return res.status(400).send({"message":"Invalid user"});
			return res.status(200).send(result); 
		});
	}
};