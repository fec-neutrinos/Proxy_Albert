const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use('*', cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/*', express.static(path.join(__dirname, 'public')));

app.get('/:productName', (req, res) => {
  res.sendFile((path.join(__dirname + '/public/index.html')))
})

app.get('/api/:productName', (req,res) => {
  axios.get(`http://localhost:3001/api/${req.params.productName}`)
  .then(results => {
    console.log(results.data[0]);
    res.send(results.data[0])
  })
  .catch(err => {
    console.log(err);
  })
})
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});

