import axios from "axios";
const host = process.env.SMTP2GO_HOST;
const sendMail = async (email, fullname, message) => {
  return axios({
    method: "POST",
    url: `${host}/api/contact`,
    data: {
      email: email,
      fullname: fullname,
      message: message,
    },
  });
};

export default sendMail;
