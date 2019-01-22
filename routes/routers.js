const router = express.Router();
const login=require('../models/login');
const createaccount=require('../models/createaccount');
const loginApp=new login();
router.post('/login',(req,res)=>
	loginApp.userAuth(req,res)
);
router.post('/createaccount',(req,res)=>{
	return new createaccount().addnewuser(req,res);
});

module.exports = router;