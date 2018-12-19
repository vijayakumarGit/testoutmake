const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const ObjectId = require('mongodb').ObjectID;
const db_url = 'mongodb://kirio:kirio1234@ds221990.mlab.com:21990/kiri';
var main_db;
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send('Main Server working at 3000');
});

app.post('/addtodb',(req,res)=>{
	// console.log(req.body);
	const db=main_db.db('kiri').collection('user_data');
	db.insertOne(req.body,(err,result)=>{
		// console.log(result.insertedId);
		if(err) return res.status(400).send(err);
		return res.status(200).send({"id":result.insertedId});
	});
});
app.get('/getfromdb/:id',(req,res)=>{
	// "_id": {
	// "$oid": "5c0f8b5675334b0ce66413aa"
	// }
	// const 
	const db=main_db.db('kiri').collection('user_data');
	db.findOne({"_id": ObjectId(req.params.id)},(err,result)=>{
		if(err) return res.status(400).send(err);
		return res.status(200).send(result); 
	});
});
MongoClient.connect(db_url,{ useNewUrlParser: true },(err,database)=>{
	if(err){
		return console.log('DB error:' + err);
	}
	main_db=database;
	app.listen(80, () => {
	console.log('Port Listing 3000 .');
	});
	
});

