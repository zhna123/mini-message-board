const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-MessageBoard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
})

router.post('/new', function(req, res, next) {
  const reqObj = req.body;
  const user = reqObj.author;
  const text = reqObj.message;
  const added = new Date();
  messages.push({text: text, user: user, added: added})
  res.redirect('/');
})

module.exports = router;
