const express = require('express');

const app = express();

app.use(express.static('static'));

app.listen(80, () => 'App is currently running on port 80.');


