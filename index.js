const express = require('express');
const path    = require("path");

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/subscribe', (request, response) => {
    console.log(request)
})

app.post('/contact', (request, response) => {
    console.log(request)
})



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})