const express = require('express')
const cors    = require('cors')
const mysql   = require('mysql2/promise')

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'devnotes',
  user: process.env.DB_USER || 'app',
  password: process.env.DB_PASSWORD || 'appsecret',
  waitForConnections: true, connectionLimit: 10,
})

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

app.get('/api/notes', async (_, res) => {
  const [rows] = await pool.query('SELECT * FROM notes ORDER BY created_at DESC')
  res.json(rows)
})

app.post('/api/notes', async (req, res) => {
  const { title, body = '' } = req.body
  const [r] = await pool.query('INSERT INTO notes (title, body) VALUES (?, ?)', [title, body])
  res.json({ id: r.insertId, title, body })
})

app.delete('/api/notes/:id', async (req, res) => {
  await pool.query('DELETE FROM notes WHERE id = ?', [req.params.id])
  res.json({ ok: true })
})

const PORT = parseInt(process.env.PORT) || 3000
app.listen(PORT, () => console.log(`DevNotes API on :${PORT}`))
