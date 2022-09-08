const { Router } = require('express');

const {post_operation, get_my_operations,edit_operation,get_single_operation,delete_operation} = require("../controllers/operation_controllers")

const router = Router();

router.post("/",post_operation)
router.get("/:ID",get_single_operation)
router.get("/own/:UserID",get_my_operations)
router.put("/:ID",edit_operation)
router.delete("/:ID",delete_operation)


module.exports = router;