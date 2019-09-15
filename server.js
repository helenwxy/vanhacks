//server.js

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = 'CREATE TABLE donorinfo (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, function(err,result) {
        if (err) throw err;
        console.log("donor table created!");
    })
});