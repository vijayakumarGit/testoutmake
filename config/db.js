const MongoClient = require('mongodb').MongoClient;
const EventEmitter = require('events');
const db_url = 'mongodb://kirio:kirio1234@ds221990.mlab.com:21990/kiri';
module.exports = class checkClientConnection extends EventEmitter{
	constructor(){
		super();
		this.activedb();
	}
	activedb(){
	MongoClient.connect(db_url,{ useNewUrlParser: true },(err,database)=>{
	if(err){
		return this.emit('connectionFailed',err);
	}
	const main_db=database;
	global.db=main_db.db('kiri');
	this.emit('connectionSuccess',{connect:"activated"});	
	});
}
};
