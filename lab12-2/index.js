const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const app = express();
const sqlite3 = require('sqlite3').verbose();

// Middleware setup
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

let db = new sqlite3.Database('customers.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Routes
app.get("/", async (req, res) => {
    const sql = "SELECT * FROM customers WHERE CustomerId = 19;";
    db.all(sql, function (err, rows) {
        if (err) {
            return res.send(err.message);
        }
        res.render('index', { rows: rows });
    });
});

app.post('/saveData', (req, res) => {
    const { employeeId, firstName, lastName, address, email, phone } = req.body;
    res.cookie('userData', { employeeId, firstName, lastName, address, email, phone }, { maxAge: 24 * 60 * 60 * 1000 });
    console.log('Saved to Cookie:', req.cookies.userData);
    res.json({ message: "Data saved successfully", data: req.cookies.userData });
});

app.get('/showData', (req, res) => {
    if (req.cookies.userData) {
        res.json({ sessionData: req.cookies.userData });
    } else {
        res.json({ message: "No data in cookies" });
    }
});

app.get('/clearData', (req, res) => {
    res.clearCookie('userData');
    res.json({ message: "Cookie cleared successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
