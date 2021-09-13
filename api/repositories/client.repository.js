import { connect } from './db.js';

async function insertClient(client) {
    const conn = await connect();
    try {
      const sql = `INSERT INTO clients (name, lastName, email, location, bookDate, time) 
      VALUES($1, $2, $3, $4, $5 ,$6) RETURNING *`
      const values = [client.name, client.lastName, client.email, client.location, client.bookDate, client.time];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (err) {
      throw err;
    } finally {
      conn.release();
    }
  }

export default{
    insertClient
}