const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const knex = require('./lib/knex')

app.use(express.static('public'))

// app.use('/api', require('./api'))
app.post('/api/form-submit', bodyParser.json(), (req, res) => {
  return knex('answer').insert({
    ts: knex.fn.now(),
    form_id: req.body.form_id,
    ans: JSON.stringify(req.body.ans),
  }, 'id').then(ids => {
    res.send({
      status: true,
    })
  }).catch(error => {
    console.error(error)
    res.send({
      status: false,
      error: 'ERR_INTERNAL',
    })
  })
})

app.listen(9004, function () {
  console.log('Example app listening on port 9004!')
})

fs.writeFileSync('./public/form/1.json', JSON.stringify(require('./survey'), null, 2))
