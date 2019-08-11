const express = require('express');

const app = express();

app.use(express.static('static'));

app.listen(2020, () => 'App is currently running on port 80.');


