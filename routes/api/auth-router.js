import express from "express";
import ctrl from "../../controllers/auth-controller.js";
import { validateBody } from "../../decorators/index.js";
import { authenticate, upload } from "../../middlewares/index.js";
import { schemas } from "../../models/user.js";

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updateSubcriptionSchema),
  ctrl.updateSubscription
);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

export default router;
