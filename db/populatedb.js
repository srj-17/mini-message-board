#!/usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username VARCHAR(255),
    date DATE
);

INSERT INTO messages (text, username, date) 
VALUES 
    ('Hello! Please add a message', 'srj', '2000-12-09'),
    ('Hola! Thank you', 'srj', '2000-12-10');
`;

async function main() {
  console.log("sending...");
  if (!argv[2]) {
    console.log("Usage: npm run populate [URL_TO_DB]");
    return;
  }

  const url = new URL(argv[2]);
  const client = new Client({
    connectionString: url.toString(),
  });

  await client.connect();
  try {
    await client.query(SQL);
    console.log("Database populated!");
  } catch (e) {
    console.error(e);
  } finally {
    await client.end();
  }
}

main();
