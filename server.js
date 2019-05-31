// Dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./app/routes/htmlRoutes.js');
const apiRoutes = require('./app/routes/apiRoutes.js');



// Set up express and browser port
const app = express();
const PORT = 3000;



// Specify the static folder -- external css files won't run without this.
app.use(express.static(path.join(__dirname, 'app/public')));
// Use html and api routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);



app.listen(PORT, function () {
  console.log('App running on port: ' + PORT);
});

