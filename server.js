const express = require('express')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000

mongoose.connect('mongodb://localhost:/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use('/articles', articleRouter)
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Article test',
      createdAt: new Date(),
      description: 'Test description',
    },
    {
      title: 'Article 2',
      createdAt: new Date(),
      description: 'description 2',
    },
  ]
  res.render('articles/index', { articles: articles })
})
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
