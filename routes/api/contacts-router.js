import express from "express";
import ctrl from "../../controllers/contacts-controller.js";
import {
  isEmptyBody,
  isValidId,
  authenticate,
} from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { schemas } from "../../models/contact.js";

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(schemas.addSchema),
  ctrl.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

export default router;
