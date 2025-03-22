const { addMessage } = require("../db");

function getNew(req, res) {
  res.render("form", { title: "New Message" });
}

function postNew(req, res) {
  const user = req.body.user || "Anonymous";
  const message = req.body.message;
  addMessage(user, message, new Date());
  res.redirect("/");
}

module.exports = {
  getNew,
  postNew,
};
