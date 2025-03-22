const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  console.log(messageId);
});

module.exports = messageRouter;
