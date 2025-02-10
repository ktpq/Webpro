// index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// เพิ่มใช้งานไฟล์
const conn = require('./dbconn.js');

// static resourse
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/create', function (req, res) {
    // create table 
    let sql =`create table Users (username text, password text, email text, firstname text, lastname text, age int(5), address text, phone text);`;    
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Created successfully.");
    }); 
})

app.get('/show', function (req, res) {

    // ให้แสดงข้อมูล จาก table instructor และ teaches
    // ดังนี้ ID name dept_name course_id semester year

    const sql = 'select * from instructor;';
    conn.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.render('show', { data: result })
        res.end()
    })
});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get('/process_get', function (req, res) {
    let formdata = {
        id: req.query.id,
        name: req.query.name,
        dept_name: req.query.dept_name,
        salary: req.query.salary
    };
    console.log(formdata);  
    
    let sql = `INSERT INTO instructor (ID, name, dept_name, salary) values (${formdata.id},${formdata.name},${formdata.dept_name},${formdata.salary});`;
    console.log(sql);
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("a record inserted");
    });
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 