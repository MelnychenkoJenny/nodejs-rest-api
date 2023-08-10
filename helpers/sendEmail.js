import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { PASSWORD_META, EMAIL_META } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_META,
    pass: PASSWORD_META
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_META };

// await transport.sendMail(email).then((info) => console.log(info)).catch(console.log(error.message));

//  return true;
try {
  const info = await transport.sendMail(email);
  console.log(1)
  console.log(info);
  return true;
} catch (error) {
  console.log(1651616)
  console.log(error.message);
  return false;
}
};

export default sendEmail;
