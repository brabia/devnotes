import { useState, useEffect } from 'react'

export default function App() {
  const [notes,   setNotes]   = useState([])
  const [title,   setTitle]   = useState('')
  const [body,    setBody]    = useState('')
  const [loading, setLoading] = useState(true)

  const load = () =>
    fetch('/api/notes').then(r => r.json()).then(setNotes).finally(() => setLoading(false))

  useEffect(() => { load() }, [])

  const add = async () => {
    if (!title.trim()) return
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    })
    setTitle(''); setBody(''); load()
  }

  const del = async id => {
    await fetch(`/api/notes/${id}`, { method: 'DELETE' }); load()
  }

  const onKey = e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) add() }

  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: 640, margin: '60px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: '#0A0E1A', marginBottom: 4 }}>DevNotes UPDATED</h1>
      <p style={{ color: '#5A6A8A', fontSize: 13, marginBottom: 28 }}>Deployed via Linexa Cloud Studio</p>

      <div style={{ background: '#F4F6FF', border: '1px solid #D1DAEF', borderRadius: 8, padding: 16, marginBottom: 28 }}>
        <input
          value={title} onChange={e => setTitle(e.target.value)} onKeyDown={onKey}
          placeholder="Note title…"
          style={{ width: '100%', boxSizing: 'border-box', padding: '8px 10px', border: '1px solid #D1DAEF', borderRadius: 5, fontSize: 13, marginBottom: 8, outline: 'none' }}
        />
        <textarea
          value={body} onChange={e => setBody(e.target.value)} onKeyDown={onKey}
          placeholder="Details (optional)…" rows={3}
          style={{ width: '100%', boxSizing: 'border-box', padding: '8px 10px', border: '1px solid #D1DAEF', borderRadius: 5, fontSize: 13, resize: 'vertical', outline: 'none', marginBottom: 8 }}
        />
        <button onClick={add}
          style={{ background: '#3A6BDB', color: '#fff', border: 'none', borderRadius: 5, padding: '8px 20px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          + Add Note
        </button>
        <span style={{ marginLeft: 10, fontSize: 11, color: '#B0BACC' }}>or Ctrl+Enter</span>
      </div>

      {loading
        ? <p style={{ color: '#5A6A8A' }}>Loading…</p>
        : notes.length === 0
          ? <p style={{ color: '#B0BACC', textAlign: 'center', marginTop: 40 }}>No notes yet — add one above.</p>
          : notes.map(n => (
            <div key={n.id} style={{ background: '#fff', border: '1px solid #D1DAEF', borderRadius: 8, padding: '12px 14px', marginBottom: 10, display: 'flex', gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#0A0E1A' }}>{n.title}</div>
                {n.body && <div style={{ fontSize: 12, color: '#5A6A8A', marginTop: 4, whiteSpace: 'pre-wrap' }}>{n.body}</div>}
                <div style={{ fontSize: 11, color: '#B0BACC', marginTop: 6 }}>{new Date(n.created_at).toLocaleString()}</div>
              </div>
              <button onClick={() => del(n.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#B0BACC', fontSize: 16, padding: '0 4px', alignSelf: 'flex-start' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D63250'}
                onMouseLeave={e => e.currentTarget.style.color = '#B0BACC'}>
                ✕
              </button>
            </div>
          ))
      }
    </div>
  )
}
