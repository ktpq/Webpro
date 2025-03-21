const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('myDB.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});


// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  const endpoint = 'http://localhost:3000/api';
    fetch(endpoint)
        .then(response => response.json())
        .then(empl => {
            console.log(empl);
            res.render('show', { data: empl })
        })
        .catch(error => {
            console.log(error);
        });

});

app.get("/form", (req, res) => {
    res.render('form')

});

app.get('/api', (req,res) => {
  const query = 'select * from todo;'
  db.all(query, (err, rows) =>{
    if (err){
      console.log(err.message)
    }
    console.log(rows)
    res.send(JSON.stringify(rows))
  })
})

app.post('/addtodo', (req,res) =>{
	// console.log(req.body)
	const title = req.body.title
	const desc = req.body.desc
	const deadline = req.body.deadline
	const query = `insert into todo (Title, Description, Deadline) values ('${title}', '${desc}', '${deadline}');`
	db.run(query, (err) =>{
		if (err) {
			console.log(err.message)
		}
	})
	res.redirect('/')
})

app.get('/clear', (req, res) => {
  const dropTableQuery = `DROP TABLE IF EXISTS todo;`; // ลบตารางเดิม
  const createTableQuery = `
      CREATE TABLE todo (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          Title text NOT NULL,
          Description text,
          Deadline text,
          Complete text DEFAULT "false"
      );
  `;

  db.serialize(() => {
      db.run(dropTableQuery, (err) => {
          if (err) {
              console.log("Error dropping table:", err.message);
              return res.status(500).send("Error dropping table");
          }
          console.log("Todo table dropped!");

          db.run(createTableQuery, (err) => {
              if (err) {
                  console.log("Error creating table:", err.message);
                  return res.status(500).send("Error creating table");
              }
              console.log("Todo table recreated!");
              res.redirect('/');
          });
      });
  });
});

app.listen(port, () => {
  console.log(`Starting node.js at port ${port}`);
});