var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ADMIN",
  password: "******"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE USERS", function (err, result) {
    if (err) throw err;
    console.log("Database USERS created");
  });
});

con.connect(function(err) {
  if (err) throw err;
 
  con.query("USE DATABASE USERS", function (err, result) {
    if (err) throw err;
    console.log("Database changed to users successfully");
  });
});



// CREATING TABLE FOR USER LOGS

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE TABLE USER_LOGS ("FIRST_NAME VARCHAR(25) NOT NULL,LAST_NAME VARCHAR(25),EMAIL NOT NULL PRIMARY KEY, PASSWORD VARCHAR(200)", function (err, result) {
    if (err) throw err;
    console.log("TABLE created");
  });
});


