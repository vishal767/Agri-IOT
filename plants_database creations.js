
/*CREATING DATABASE FOR SELECTION SUITABLE PLANTS     */                            



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ADMIN",
  password: "******"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE PLANTS_CRITERIA", function (err, result) {
    if (err) throw err;
    console.log("Database PLANTS_CRITERIA created");
  });
});





// CREATING TABLE FOR PH,MOISTURE WEATHER  AND PLANTS 

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE TABLE FARMING_PLANT (PLANT_NAME VARCHAR(255) NOT NULL,PH_MIN float,PH_MAX float,WEATHER VARCHAR(20)", function (err, result) {
    if (err) throw err;
    console.log("TABLE created");
  });
});


// upload csv file 


var csv ="LOAD DATA INFILE "desktop/plants.csv INTO TABLE FARMING_PLANT  COLUMNS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES";



con.connect(function(err) {
  if (err) throw err;
  con.query(csv, function (err, result) {
    if (err) throw err;
    console.log("csv succesfully uploaded");
  });
});









