const { UserInfo } = require('../classes/UserInfo');
const { sendToChannel } = require('../telegramHelper.js');

module.exports = function(app, db) {
  app.post('/userInfo', (req, res) => {
    const userInfo = new UserInfo(req.body);
    const userText = userInfo.getTelegramText();
    sendToChannel(userText);
    res.send(true);
  })
}