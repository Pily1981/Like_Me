const { Pool } = require('pg'); 

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1107",
    database: "likeMe", 
    port: 5432,
    allowExitOnIdle: true,
  });

export default pool;