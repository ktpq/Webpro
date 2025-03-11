const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const app = express();
const sqlite3 = require('sqlite3').verbose();

// Middleware setup
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views"); // โฟลเดอร์ที่เก็บไฟล์ .ejs
app.use(express.static("public"));

let db = new sqlite3.Database('customers.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});


// Routes
app.get("/", async (req, res) => {
    const sql = "select * from customers where CustomerId = 19;"
    db.all(sql, function(err, rows){
        if (err){
            res.send(err.message)
        }
        res.render('index', {rows: rows})
    })
});

app.post('/saveData', (req, res) => {
    const { employeeId, firstName, lastName, address, email, phone } = req.body;
    req.session.userData = { employeeId, firstName, lastName, address, email, phone };
    console.log('Saved to session:', req.session.userData);
    res.json({ message: "Data saved successfully", data: req.session.userData });
});

app.get('/showData', (req, res) => {
    if (req.session.userData) {
        res.json({ sessionData: req.session.userData });
    } else {
        res.json({ message: "No data in session" });
    }
});

app.get('/clearData', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ error: "Failed to clear session" });
        }
        res.json({ message: "Session cleared successfully" });
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});