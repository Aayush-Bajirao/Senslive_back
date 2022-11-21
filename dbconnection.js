const mysql = require('mysql');

const dbconnection = mysql.createConnection({
    //host:'localhost',
    //user:'root',
    //password:'everest198',
    //database:'new_senselive3',
    port: "3306",
    host:'salasardb1.cl4hxfnr1mxc.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'admin_123',
    database:'SalasarDB'
});

module.exports = dbconnection;