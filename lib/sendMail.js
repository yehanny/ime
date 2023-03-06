import axios from "axios";
const sendMail = async (email_to, email_from, fullname, message) => {
  return axios({
    method: "POST",
    // headers: {
    //   Authorization: `Bearer lH9deEsDS7D/NwiaaeTvhtkSd/gs8JrARz8juFtiMIq4I+OsS2wLltXypF3pYZXvUyypHojPJv0OFD9LKF4OwPAA789+5MpqSL7ReL7YB6c=`,
    // },
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
