// app/api/packages/[packageId]/route.js
import dbConnect from '@/lib/Dbconnection/Dbconnect';
import Package from '../../../../lib/model/Tourschema';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();

  const { packageId } = req.params;

  try {
    const packageData = await Package.findOne({ packageId });
    if (!packageData) {
      return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: packageData });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
