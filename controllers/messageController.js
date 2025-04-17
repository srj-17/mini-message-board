const asyncHandler = require("express-async-handler");
const CustomNotErrorFound = require("../errors/CustomNotErrorFound");
const messages = require("../db/queries");

const getMessage = asyncHandler(async (req, res, next) => {
  const { messageId } = req.params;
  const message = await messages.getMessageById(messageId);
  if (!message) {
    throw new CustomNotErrorFound("Couldn't find message with that Id");
  }

  res.render("message", { message: message, title: "Message" });
});

module.exports = getMessage;
