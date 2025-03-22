const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi, click add new message to add new message!",
    user: "srj",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hola",
    user: "edith",
    added: new Date(),
  },
];

async function getMessages() {
  return messages;
}

async function addMessage(user, text, date) {
  messages.push({ id: crypto.randomUUID(), user, text, added: date });
}

module.exports = {
  getMessages,
  addMessage,
};
