var path = require('path');
const express = require('express');


const app = express();
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'jade');

const port = 3000;


app.get('/', async function(req, res){
    const cat_data = await fetch('http://backend:3001/cat_get');
    const data = await cat_data.text();

    res.render('index.jade', { title: "KIT Frontend", cat_url: data });
});

app.listen(port, () => {
    console.log(`Frontend app listening on port ${port}`)
})
