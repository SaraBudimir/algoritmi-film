const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kino"
});

con.connect(function (err) {
    if (err) throw err;

    app.get('/dodaj_film/:naslov/:godina/:zanr', (req, res) => {
        let naslov = req.params.naslov
        let godina = req.params.godina
        let zanr = req.params.zanr

        var sql = "INSERT INTO filmovi (naslov,godina, zanr) VALUES ('" + naslov + "', '" + godina + "','"+ zanr +"')";
        con.query(sql, function (err, result) {
            if (err) res.send('Greška!' + err)
            res.send('Dodano!')
        });
    })

});

app.listen(port, () => {
    console.log(`Web aplikacija pokrenuta na portu ${port}`)
})