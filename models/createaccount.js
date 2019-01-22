const validate=require('./validation');

module.exports=class createaccount{
	constructor(){
		this.validate=new validate();
	}
	addnewuser(req,res){
		const {error} = this.validate.adduser(req.body);
		if(error){
			return res.status(400).send(error.details[0].message);
		}
		db.collection('user_info').insert(req.body,(err,result)=>{
			if(err || result === null) return res.status(400).send({"message":"Internal server error"});
			return res.status(200).send({"message":"success"}); 
		});
	}
};