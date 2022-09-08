const { Router } = require('express');

const operation_routes = require("./operation_routes")
const user_controllers = require("./user_routes")

const router = Router();

router.use("/operation",operation_routes)
router.use("/user",user_controllers)


module.exports = router;
