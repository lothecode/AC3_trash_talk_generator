const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const genTrashTalk = require('./gen_trash_talk')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const option = req.body.role
  // console.log(option)
  let checked = {}
  let target = ''
  switch (option) {
    case 'engineer':
      target = '工程師'
      checked.engineer = true
      break
    case 'designer':
      target = '設計師'
      checked.designer = true
      break
    case 'entrepreneur':
      target = '創業家'
      checked.entrepreneur = true
      break
  }

  const trashtalk = genTrashTalk(option, target)
  res.render('index', { trashtalk, checked })
})

app.listen(port, () => {
  console.log(`express is listening on locathost:${port}`)
})