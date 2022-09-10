const { Router } = require('express');

const {ingress,edit_user,get_users} = require("../controllers/user_controllers")

const router = Router();

router.post("/",ingress)
router.put("/:ID",edit_user)
router.get("/",get_users)

module.exports = router;