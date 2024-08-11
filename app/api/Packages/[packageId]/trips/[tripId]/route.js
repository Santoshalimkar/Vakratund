import dbConnect from '@/lib/Dbconnection/Dbconnect';
import Package from '@/lib/model/Tourschema';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  await dbConnect();

  const { packageId, tripId } = params;
  console.log(params);


  
  if (!mongoose.Types.ObjectId.isValid(packageId)) {
    return NextResponse.json({ success: false, message: 'Invalid Package ID' }, { status: 400 });
  }

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    return NextResponse.json({ success: false, message: 'Invalid Package ID' }, { status: 400 });
  }

  

  try {
   

    const packageData = await Package.findById(packageId);
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
