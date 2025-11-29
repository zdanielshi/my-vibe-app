import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    // Create the table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS vibes (
        id SERIAL PRIMARY KEY,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `
    
    return Response.json({ 
      message: 'Table created successfully! 🎉' 
    })
  } catch (error) {
    return Response.json({ 
      error: error.message 
    }, { 
      status: 500 
    })
  }
}