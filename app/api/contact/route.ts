import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    // Process the form data here (e.g., send an email, save to database, etc.)
    
    // For demonstration purposes, we're just logging the data
    console.log('Form data received:', Object.fromEntries(formData))

    return NextResponse.json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}

