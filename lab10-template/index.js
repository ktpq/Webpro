const express = require("express");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('employees.db', (err) => {    // if exist open / if not exist create
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');


// routing path
app.get('/', function(req, res){
    res.render('home')
})


app.get('/show', function (req, res) {
    const query = 'SELECT * FROM employees;';
    db.all(query, (err, rows) => {
      if (err) {
        console.log(err.message);
      }
   
      res.render('show', { data : rows });
    });
  });

  app.get('/delete', function(req, res){
    let sql = `delete from employees where EmployeeId=${req.query.id}`;
    console.log(sql)
// delete a row based on id
    db.run(sql, function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) deleted.`);
    });
    res.redirect('show')
})

app.get('/form', function(req,res){
    res.render('form')
})

app.get('/formget', function(req, res){
    let formData = {
        id: req.query.id,
        fname: req.query.fname,
        lname: req.query.lname,
        title: req.query.title,
        phone: req.query.phone,
        email: req.query.email
    }
    let sql = `insert into employees(EmployeeId, FirstName, LastName, Title, Phone, Email) values (${formData.id},'${formData.fname}','${formData.lname}','${formData.title}','${formData.phone}','${formData.email}');`
    db.run(sql, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row insert.`);
    });
})


// Starting the server
app.listen(port, () => {
   console.log("Server started.");
 });