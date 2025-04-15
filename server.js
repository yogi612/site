const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

// Check if we're in production mode
const dev = process.env.NODE_ENV !== "production"
// Initialize Next.js app
const app = next({ dev })
const handle = app.getRequestHandler()

// Get port from environment or default to 3000
// Hostinger typically assigns a port via environment variable
const port = process.env.PORT || 3000

app.prepare().then(() => {
  createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = parse(req.url, true)

    // Let Next.js handle the request
    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    console.log(`> Mode: ${dev ? "development" : "production"}`)
  })
})
