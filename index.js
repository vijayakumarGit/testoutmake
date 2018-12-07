const express = require('express');

const app = express();

app.get('/list',(req,res)=>{
	res.send('List getting..');
});

app.listen(3000,()=>{
	console.log('Port Listing 3000 ..');
});