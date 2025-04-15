import postgres from "postgres"

// Use environment variable or fallback to the provided connection string
const connectionString =
  process.env.NEON_NEON_DATABASE_URL ||
  "postgresql://postgres:finonest%637811@db.ejnxnophynvkjlvgxvud.supabase.co:5432/postgres"

const sql = postgres(connectionString, {
  ssl: "require", // Enable SSL for Supabase connections
  max: 10, // Maximum number of connections
  idle_timeout: 30, // Close idle connections after 30 seconds
})

export default sql
