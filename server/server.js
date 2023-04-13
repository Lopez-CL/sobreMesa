const express = require('express')
const app = express()
const PORT = 8000;
require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));

require('./routes/recipe.routes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))