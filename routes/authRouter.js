import { Router } from "express";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();
import { login, register, logout } from "../controllers/authController.js";
router.post(
  "/register",
  upload.single("avatar"),
  validateRegisterInput,
  register
);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
