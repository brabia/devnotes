CREATE TABLE IF NOT EXISTS notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  body TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO notes (title, body) VALUES
  ('Welcome to DevNotes', 'Deployed by Linexa Cloud Studio.'),
  ('How it works', 'Type a title, hit Add. Click ✕ to delete.');
