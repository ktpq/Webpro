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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get('/delete', function(req, res){
    conn.query('delete from users')
    res.redirect('/');
})

app.get('/signin', function (req, res) {
    
    // let data;
    let formdata = {
        username: req.query.username,
        password: req.query.password,
    };
    console.log(formdata);
    
    let sql = `select username, email, password from users where username = '${formdata.username}' or email = '${formdata.username}';`;
    console.log(sql);
    conn.query(sql, function (err, result) {
        if (err){
            throw err
        } else {
            console.log(`Success`);
            console.log(result)
            if (result.length === 0){
                console.log('ไม่พบบัญชีผู้ใช้');
            } else {
                if (result[0].password === formdata.password){
                    console.log('พบบัญชีผู้ใช้');
                } else {
                    console.log('รหัสผ่านไม่ถูกต้อง');
                }
            }
        }
    });
    res.redirect('/')
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 