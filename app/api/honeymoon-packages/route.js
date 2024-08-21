// app/api/packages/route.js
import dbConnect from '../../../lib/Dbconnection/Dbconnect';
import HoneymoonTrips from '../../../lib/model/honeymoonpackagesschema';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const packages = await HoneymoonTrips.find({});
    return NextResponse.json({ success: true, data: packages });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const packageData = await HoneymoonTrips.create(body);
    return NextResponse.json({ success: true, data: packageData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
