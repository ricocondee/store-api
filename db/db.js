const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/fakeStore.db', sqlite3.OPEN_READONLY, (err) => {
    if (err){
        console.log(err.message);
    }
    console.log('DB connected successfuly')
});

module.exports = db;
