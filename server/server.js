const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;
require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors({
    origin: 'http://localhost:3000'
}))

require('./routes/recipe.routes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))