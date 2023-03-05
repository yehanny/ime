import axios from "axios";
const sendMail = async (email, fullname, message, email_from) => {
  return axios({
    method: "POST",
    url: "https://contact.industrialmagicentertainment.workers.dev/",
    data: {
      email: email,
      fullname: fullname,
      message: message,
      email_from: "info@industrialmagicentertainment.com",
    },
  });
};

export default sendMail;
