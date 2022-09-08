const { Router } = require('express');

const {sign_up, login,edit_user,get_users} = require("../controllers/user_controllers")

const router = Router();

router.post("/",sign_up)
router.get("/login",login)
router.put("/:ID",edit_user)
router.get("/",get_users)

module.exports = router;