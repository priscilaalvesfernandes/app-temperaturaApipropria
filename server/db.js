const Pool = require('pg').Pool;

const pool = new Pool({//conectando o app ao BD
    user:"postgres", 
    host:"localhost",
    database:"tempapi",
    password:"1991",

});

module.exports = pool;