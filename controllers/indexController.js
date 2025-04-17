const messages = require("../db/queries");

const getIndex = async function (req, res) {
  const messageList = await messages.getMessages();
  if (!messageList) {
    return res.send("Sorry! No messages!");
  }

  res.render("index", { messages: messageList, title: "Mini messageboard" });
};

module.exports = {
  getIndex,
};
