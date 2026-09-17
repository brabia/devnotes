const http = require('http')

const BACKEND = process.env.BACKEND_URL || ''
const PORT = process.env.PORT || 8080

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello Front</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0 }
    body {
      font-family: system-ui, sans-serif;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      height: 100vh; gap: 14px;
      background: #EEF2FF;
    }
    h1 { font-size: 2rem; color: #3A6BDB }
    #msg { font-size: 1.1rem; color: #7B6EF7 }
  </style>
</head>
<body>
  <h1>Hello Front</h1>
  <div id="msg">connecting…</div>
  <script>
    fetch('${BACKEND}/hello')
      .then(r => r.json())
      .then(d => document.getElementById('msg').textContent = d.message)
      .catch(() => document.getElementById('msg').textContent = 'backend unreachable')
  </script>
</body>
</html>`

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(page)
}).listen(PORT)
