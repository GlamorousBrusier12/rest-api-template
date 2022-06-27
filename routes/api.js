import { Router } from "express"
const router = Router()

import { index, indexPost } from "../controllers/index.controller.js"

router.get("/", index)
router.post("/", indexPost)

export default router
