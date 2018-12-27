const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contacts = require('./routes/contacts');
const cors = require('cors');
const path = require('path');

const app = express();

const db = require('./config/keys_dev').mongoURI;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/', contacts);

//Server Static Assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
