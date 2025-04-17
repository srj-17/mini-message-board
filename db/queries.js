const pool = require("./pool");

/*
 * Project requirements:
 * 1. get messages list
 * 2. add a message (given user, text and date)
 * 3. get message by id
 */

class Messages {
  constructor() {
    this.pool = pool;
  }

  async getMessages() {
    // since I'm deconstructing the Result object, I can't
    // use any names beside rows for deconstructing. If you
    // want to change names, use aliases instead.
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  }

  async addMessage(user, text, date) {
    await pool.query(
      `INSERT INTO messages (text, username, date)
        VALUES ($1, $2, $3)`,
      [text, user, date],
    );
  }

  async getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [
      id,
    ]);

    return rows[0];
  }
}

module.exports = new Messages();
