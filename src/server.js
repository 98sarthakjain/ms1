const express = require('express');


const app = express();


app.get('/', (req, res) => {res.send("this is working");})

app.listen(process.env.PORT, 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})