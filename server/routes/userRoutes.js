const express= require('express');
const {registerUser,loginUser}= require('../controllers/userController');
const router= express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', (req, res) => {
    res.send("User API is running");});
module.exports = router;