import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };

  // await transport.sendMail(email).then((info) => console.log(info)).catch(console.log(error.message));

  //  return true;
  try {
    const info = await transport.sendMail(email);
    console.log(info);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export default sendEmail;
