const express    = require('express');
const path       = require("path");
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/subscribe', (request, response) => {
  console.log(request.body)
    response.send("success");
})

app.post('/contact', (request, response) => {
  console.log(request.body)
  response.send("sent");
})



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})