
const express=require("express")
const router = express.Router();
const authercontroller = require('../controller/authercontroller')
const blogcontroller = require('../controller/blogcontroller')
const middleware = require('../middleware/middleware')


router.get("/project", function (req, res) {
    res.send("project is started")
})




module.exports=router
