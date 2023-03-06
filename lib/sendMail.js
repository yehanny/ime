import axios from "axios";
const sendMail = async (email_to, email_from, fullname, message) => {
  return axios({
    method: "POST",
    url: "https://contact.industrialmagicentertainment.workers.dev/",
    data: {
      email_to: "info@industrialmagicentertainment.com",
      email_from: email_from,
      fullname: fullname,
      message: message,
    },
  });
};

export default sendMail;
