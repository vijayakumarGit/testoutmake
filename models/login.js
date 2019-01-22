
const validate=require('./validation');

module.exports = class login{
	constructor(){
		this.validate=new validate();
	}
		userAuth(req,res){
		const { error } = this.validate.login(req.body);
		if(error){
			return res.status(400).send(error.details[0].message);
		}
		const userData={
			username:req.body.username,
			password:req.body.password
		};
		db.collection('user_info').findOne(userData,(err,result)=>{
			if(err || result === null) return res.status(400).send({"message":"Invalid user"});
			return res.status(200).send(result); 
		});
	}
};