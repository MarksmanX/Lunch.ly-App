/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    connectionString: `postgresql://mtkephart:Aircatfloats3@localhost/lunchly`
});

db.connect();

module.exports = db;
