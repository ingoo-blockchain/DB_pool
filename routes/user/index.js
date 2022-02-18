const express = require('express')
const router = express.Router()
const userContoller = require('./user.controller')

router.get('/join',userContoller.join)
router.post('/join',userContoller.joinAction)

module.exports = router