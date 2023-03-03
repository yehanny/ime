import axios from "axios";

const sendMail = async (email, fullname, message) => {
  return axios({
    method: "POST",
    url: "/api/contact",
    data: {
      email: email,
      fullname: fullname,
      message: message,
    },
  });
};

export default sendMail;
