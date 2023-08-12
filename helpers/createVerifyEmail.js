import dotenv from "dotenv";

dotenv.config();

const { BASE_URL } = process.env;

const createVerifyEmail = ({ email, verificationCode }) => {
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email</a>`,
  };
  return verifyEmail;
};

export default createVerifyEmail;
