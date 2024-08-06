// app/api/packages/[packageId]/trips/[tripId]/route.js
import dbConnect from '@/lib/Dbconnection/Dbconnect';
import Package from '@/lib/model/Tourschema';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();

  const { packageId, tripId } = req.params;

  try {
    const packageData = await Package.findOne({ packageId });
    if (!packageData) {
      return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
    }

    const trip = packageData.trips.id(tripId);
    if (!trip) {
      return NextResponse.json({ success: false, message: 'Trip not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: trip });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
