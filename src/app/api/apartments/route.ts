import { NextResponse } from 'next/server'
import apartments from '../data/apartments.json'

export async function GET() {
  return NextResponse.json({
    apartments,
  })
}
