CREATE TABLE IF NOT EXISTS join_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  consent INTEGER NOT NULL CHECK (consent = 1),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_join_requests_created_at ON join_requests(created_at);
