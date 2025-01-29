const express = require('express')
const app = express()
const port = 3000

app.get('/hello', function(req, res){
  res.send("Hello World!");
});

app.post('/hello', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


const path = require('path');
// create directory 'public'
app.use(express.static('public'));
app.use(express.static('images'));

// Without middleware
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/cat', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/cat.html'));
});

app.get('/dog', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/dog.html'));
});

app.get('/bird', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/bird.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});