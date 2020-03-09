var express = require('express');
var router = express.Router();
const News = require('../models/news');
const jwt = require("jsonwebtoken")
// let news = [
//     {
//         title: "сервер",
//         text: "на порту 3000",
//         img: ""
//     }
// ]

// Залогиниться - найти пользователя, сверить пароль с БД
router.post('/login', (req, res) => {
    let {username, password} = req.body
    // News.find().then(news => {
    //     res.send(news)
    // })
    // console.log(news)
})

router.post('/logout', (req, res) => {
    res.send('ok')
    // console.log(news)
})

router.put('/', (req, res) => {
    jwt.verify(token, 'shhhhh', function(err, decoded) {
        console.log(decoded.foo) // bar
        if (err) res.send(err)
        console.log(req.body)
        // let nw = req.body
        let news = new News(req.body);
        news.save().then(news => {
        res.send(news)
    })
    //news.push(nw)
    // nw.id = 300
    // res.send("Файл news.js на сервере")
    // res.send(req.body)
    //res.send(nw)
      });
    
})

router.delete('/', (req, res) => {
    // console.log(req.body._id)
    // News.findByIdAndDelete(req.body._id).then(() => {
    //     console.log('Новость удалена')
    // })
    // console.log('запрос удалить на 3000 ')
    // let news = new News(req.body);
    // News.remove({_id: news}).then(news => {
    // // news.findOneAndRemove(req.body._id).then(news => {
    //     console.log("Новость "+news+" удалена")
    //     res.send(news)
    // })
    console.log(News(req.body))
    // News.deleteOne(News(req.body)).then(News => {
    //     // news.findOneAndRemove(req.body._id).then(news => {
    //         console.log("Новость удалена")
    //         res.send(News)
    //     })
})

module.exports = router