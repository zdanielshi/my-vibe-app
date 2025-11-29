import { sql } from '@vercel/postgres'

// GET request - fetch all vibes
export async function GET() {
  try {
    const { rows } = await sql`
      SELECT * FROM vibes 
      ORDER BY created_at DESC
    `
    
    return Response.json(rows)
  } catch (error) {
    return Response.json({ 
      error: error.message 
    }, { 
      status: 500 
    })
  }
}

// POST request - add a new vibe
export async function POST(request) {
  try {
    const { message } = await request.json()
    
    if (!message || message.trim() === '') {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }
    
    await sql`
      INSERT INTO vibes (message)
      VALUES (${message})
    `
    
    return Response.json({ 
      success: true,
      message: 'Vibe added! 🌊'
    })
  } catch (error) {
    return Response.json({ 
      error: error.message 
    }, { 
      status: 500 
    })
  }
}