import axios from "axios";

const sendMail = async (email, fullname, message) => {
  return axios({
    method: "POST",
    url: process.env.SMTP2GO_HOST + "/api/contact",
    data: {
      email: email,
      fullname: fullname,
      message: message,
    },
  });
};

export default sendMail;
