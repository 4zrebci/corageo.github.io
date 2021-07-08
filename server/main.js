const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(express.json());  
app.use(bodyParser.urlencoded({ extended: true }));

let mails = [];

const port = 3001

app.get('/getMails', (req, res) => {
    let content = '';
    for(let mail of mails) {
        content += `<h4>${mail}</h4>`;
    }
    res.send(content);
})

app.post('/sendMail', function (req, res) {
    console.log('Got body:', req.body);
    const getedObject = req.body;
    if(getedObject && getedObject.mail) {
        if(mails.indexOf(getedObject.mail) < 0) {
            mails.push(getedObject.mail);
        }
    }

    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})