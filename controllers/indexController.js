const queries = require("../db/queries");

const getIndex = async function (req, res) {
  const messages = await queries.getMessages();
  if (!messages) {
    return res.send("Sorry! No messages!");
  }

  res.render("index", { messages: messages, title: "Mini messageboard" });
};

module.exports = {
  getIndex,
};
