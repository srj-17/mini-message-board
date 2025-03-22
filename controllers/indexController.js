const db = require("../db");

const getIndex = async function (req, res) {
  const messages = await db.getMessages();
  if (!messages) {
    res.send("Sorry! No messages!");
  }

  res.render("index", { messages: messages, title: "Mini messageboard" });
};

module.exports = {
  getIndex,
};
