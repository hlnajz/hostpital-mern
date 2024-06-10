// import express from "express";
// import {
//   getAllMessages,
//   sendMessage,
// } from "../controller/messageController.js";
// import { isAdminAuthenticated } from "../middlewares/auth.js";
// const router = express.Router();

// router.post("/send", sendMessage);
// router.get("/getall", isAdminAuthenticated, getAllMessages);

// export default router;
import express from "express";
import {
  getAllMessages,
  sendMessage,
  deleteMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);
router.delete("/delete/:id", isAdminAuthenticated, deleteMessage);

export default router;
