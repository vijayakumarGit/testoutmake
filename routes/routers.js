const router = express.Router();
const login=require('../models/login');
router.post('/login',(req,res)=>new login(req,res));

module.exports = router;