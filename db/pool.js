const { Pool } = require("pg");

module.exports = new Pool({
  // other settings come from environment variables
  // make the connection to database server secure
  // with ssl
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});
