const express = require('express');
var cors = require('cors')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api', require('./config/routes'));

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
