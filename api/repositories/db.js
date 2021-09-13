import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: 'postgres://gznqmvti:k5MSryKo-eHG26wEn60ZQAqpnz5AHH0-@chunee.db.elephantsql.com/gznqmvti'
  });
  global.connection = pool;

  return pool.connect();
}

export {
  connect
}