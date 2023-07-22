import { Schema, model } from "mongoose";
import { handleMongooseError } from "../helpers/index.js";
import Joi from "joi";

const phoneRegexp = /^(?:(?:\+?|\()?[\d\s()-]*\d[\d\s()-]*){7,14}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required. Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Email is required. Set email for contact"],
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: [true, "Phone is required. Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    message: "Name is required",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().required().pattern(phoneRegexp).messages({
    message: "Phone number must between 7 and 14 numbers",
  }),
  favorite: Joi.boolean().messages({ message: "missing fields favorite" }),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model("contact", contactSchema);

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

export { Contact, schemas };
