const express = require('express')
const app = express()

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/hello', (_, res) => {
  res.json({ message: 'Hello Back' })
})

app.listen(process.env.PORT || 8080)
