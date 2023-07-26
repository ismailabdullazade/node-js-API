const router = require("express").Router()
const {login,register} = require("../controllers/auth.controller")
const authValidation=require("../middlewares/validations/authvalidation")

router.post("/login",authValidation.login,login)
router.post("/register",authValidation.register,register)

module.exports = router