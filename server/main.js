const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

app.use(express.json());  
app.use(bodyParser.urlencoded({ extended: true }));

let mails = [
    {
        name: "Meno Priezvisko",
        email: "email@example.com",
        message: "Spr98vshgjkgnjksdnhfgjsdnhfgtjnf"
    }
];

const port = 3001

app.get('/getMails', (req, res) => {
    /* let content = '';
    for(let mail of mails) {
        content += `<h4>${mail}</h4>`;
    } */
    res.send(JSON.stringify(mails));
})

app.post('/sendMail', function (req, res) {
    console.log('Got body:', req.body);
    mails.push(req.body)

    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})