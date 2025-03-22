class CustomNotErrorFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

module.exports = CustomNotErrorFound;
