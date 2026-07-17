import pg from "pg";

const pool = new pg.Pool();

export async function getUserById(id) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0] ?? null;
}

export async function listUsers(limit) {
  const result = await pool.query("SELECT * FROM users ORDER BY id LIMIT $1", [limit]);
  return result.rows;
}
