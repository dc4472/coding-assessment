const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3008;






let medbills=[]

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/medbill', (req, res) => {
    const medbill=req.body;

    console.log(medbill)
    medbills.push(medbill)

    res.send('medical bill has been stored. Thank you!')
});

app.listen(port, () => console.log(`Medical Bill app listening on port ${port}!`))


app.get('/medbills', (req, res) => {

    res.send('Here is a list of the medical bills: ');
    res.json(medbills);
});