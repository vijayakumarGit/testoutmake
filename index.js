const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const db_url = 'mongodb://kirio:kirio1234@ds221990.mlab.com:21990/kiri';
var main_db;
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send('Main Server working at 3000');
});
app.post('/addtodb',(req,res)=>{
	console.log(req);
});
MongoClient.connect(db_url,{ useNewUrlParser: true },(err,database)=>{
	if(err){
		return console.log('DB error:' + err);
	}
	main_db=database;
	app.listen(6200, () => {
	console.log('Port Listing 6200 .');
});
	
});

