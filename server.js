const { readFileSync, writeFileSync } = require(`fs`);

const express = require(`express`);
const app = express();
const path = require('path');
//var router = express.Router();




app.get(`/`, (req, res) => {
    const count = readFileSync(`/home/pi/Desktop/database.txt`, `utf-8`);
    console.log(`count`, count)

    const newCount = parseInt(count) + 1
    //const newCountString = String.format(newCount)
    

    writeFileSync(`/home/pi/Desktop/database.txt`, newCount.toString());

    res.send(`
    <!DOCTYPE ,html>
    <html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <title>Test Website</title>
    </head>
    <body>
        <h1>Rice's homemade cloud</h1>
        <h1>Index</h1>
        <p>Idk how to make stuff so all my site can do is count visits ):</p>
        <p>This page has been loaded ${newCount} times</p>
        <h1>Page 2:</h1>
        <a href="/page2">Link to Page 2</a>
        <h1>Changlog:</h1>
        <a href="/changelog">Link to Changelog</a>
        
    </body>
    </html>
    `);
});
app.get(`/page2`, (req, res) => {
    //res.sendFile(path.join(__dirname, '/resources/page2.html'));
    res.send("hello page 2")
});
app.get(`/changelog`, function(req, res) {
    //res.sendFile(path.join(__dirname, '/resources/changelog.html'));
    res.render("/resources/changelog.html")
});
app.listen(5000, () => console.log('http://localhost:5000/'));