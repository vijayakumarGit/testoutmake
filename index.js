global.express = require('express');
const app = express();
// const ObjectId = require('mongodb').ObjectID;
const client = require('./config/db');
const db_client = new client();
const router= require('./routes/routers');
app.use(express.json());
app.use(router);

// Add headers
app.use((req, res, next)=> {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// app.get('/', (req, res) => {
// 	res.status(200).send('Main Server working at 3000');
// });

// app.post('/addtodb',(req,res)=>{
// 	// console.log(req.body);
// 	const db=main_db.db('kiri').collection('user_data');
// 	db.insertOne(req.body,(err,result)=>{
// 		// console.log(result.insertedId);
// 		if(err) return res.status(400).send(err);
// 		return res.status(200).send({"id":result.insertedId});
// 	});
// });
// app.get('/getuserinfo/:id',(req,res)=>{
// 	// "_id": {
// 	// "$oid": "5c0f8b5675334b0ce66413aa"
// 	// }
// 	// const 
// 	db.collection('user_data').findOne({"_id": ObjectId(req.params.id)},(err,result)=>{
// 		if(err) return res.status(400).send(err);
// 		return res.status(200).send(result); 
// 	});
// });
const port= process.env.PORT || 3000;
db_client.on('connectionFailed',(arg)=>{
	console.log(err);
});
db_client.on('connectionSuccess',(arg)=>{
	console.log(arg);
	app.listen(port, () => {
	console.log(`Port Listing ${port} .`);
	});
});


