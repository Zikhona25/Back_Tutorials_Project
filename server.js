const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT= process.env.PORT || 8020

const db= require("./app/models")

db.mongoose.connect(db.url).then(() => {
    console.log("Connected to the database")
}).catch( err => {
    console.log("Cannot connect", err)
    process.exit()
})


require('./app/routes/tutorials.routes')(app);

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
});


