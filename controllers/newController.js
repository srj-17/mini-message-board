const messages = require("../db/queries");

function getNew(req, res) {
  res.render("form", { title: "New Message" });
}

// TODO: validate the input
function postNew(req, res) {
  const user = req.body.user || "Anonymous";
  const message = req.body.message;
  messages.addMessage(user, message, new Date());
  res.redirect("/");
}

module.exports = {
  getNew,
  postNew,
};
