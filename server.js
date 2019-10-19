const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use('*', cors());
// app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/:productName', (req, res) => {
  res.sendFile((path.join(__dirname + '/public/index.html')))
})


app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
