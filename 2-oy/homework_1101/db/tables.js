import pool from "./db.js";

export const createTables = async () => {
  try {
    const tables = [
      `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        )`,
        
        ` CREATE TABLE IF NOT EXISTS columns(
          id SERIAL PRIMARY KEY,
          column_limit INT NOT NULL
        );
        `,
        `CREATE TABLE IF NOT EXISTS board(
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          columns_id INT NOT NULL REFERENCES columns(id) ON DELETE CASCADE,
          createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
        `,
        `CREATE TABLE IF NOT EXISTS tasks(
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          orderNumber INT NOT NULL,
          description VARCHAR(255) NOT NULL,
          userId INT REFERENCES users(id) ON DELETE CASCADE,
          boardId int REFERENCES board(id) ON DELETE CASCADE,
          columns_id INT NOT NULL REFERENCES columns(id) ON DELETE CASCADE,
          createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
        `
    ];

    for (let table of tables) {
      await pool.query(table);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
