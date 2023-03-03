import axios from "axios";
const sendMail = async (email, fullname, message) => {
  return axios({
    method: "POST",
    url: "http://industrialmagicentertainment.com/api/contact",
    data: {
      email: email,
      fullname: fullname,
      message: message,
    },
  });
};

export default sendMail;
