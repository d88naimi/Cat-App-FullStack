// Set up MySQL connection.
var mysql = require("mysql");
var connection;



if (process.env.JAWS_URL) {
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "tltsbtksxyugwtp7",
    password: "mfsjiiuvgwm2apde",
    database: "byuyl9ge18sba315"
  });
}



// https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c165f387-61de-4c7e-a228-a86a0128f709
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
