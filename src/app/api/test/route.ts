import { NextResponse } from 'next/server'

export async function GET() {
	try {
		return NextResponse.json({
			response: 'xd'
		})
	} catch (error) {
		return NextResponse.json({
			error
		})
	}
}
