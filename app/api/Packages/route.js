// app/api/packages/route.js
import dbConnect from '../../../lib/Dbconnection/Dbconnect';
import Package from '../../../lib/model/Tourschema';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const packages = await Package.find({});
    return NextResponse.json({ success: true, data: packages });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const packageData = await Package.create(body);
    return NextResponse.json({ success: true, data: packageData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
