const express = require('express')
const cors = require('cors')
const db = require('./db/db')
const query = require('./db/query')
const app = express()

app.use(cors())
app.use(express.static('public'))


const port = 3000;

app.get('/api/products', (req, res) => {
    db.all(query.SELECTALL, (error, data) =>{
        if (error){
            console.table(error.message);
        }
        res.json(data)
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})