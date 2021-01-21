const axios = require('axios');

const apiToken = '1211014939:AAG8xdSSOHzXBbDvO-BjXuvp-tO4CkdOX8c';
const chatId = '@AdoptMeChannel';

function sendToChannel(text) {
  return axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.error(err);
    })
}

module.exports = {
  sendToChannel
}

