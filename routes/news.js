var express = require('express');
var router = express.Router();

let news = [
    {
        title: "сервер",
        text: "на порту 3000",
        img: ""
    }
]

router.get('/', (req, res) => {
    res.send(news)
})

router.put('/', (req, res) => {
    console.log(req.body)
    let nw = req.body
    news.push(nw)
    // nw.id = 300
    res.send("Файл news.js на сервере")
    res.send(nw)
})

module.exports = router