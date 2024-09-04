// app/api/UpcommingTripss/[UpcommingTripsId]/trips/route.js
import dbConnect from '@/lib/Dbconnection/Dbconnect';
import UpcommingTrips from '@/lib/model/WeekendTripsschema';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  await dbConnect();

  const { UpcommingTripsId } = params;  // Capture the UpcommingTripsId from params

  console.log('UpcommingTripsId:', UpcommingTripsId);  // Debug: Log UpcommingTripsId to ensure it's captured
  
  if (!mongoose.Types.ObjectId.isValid(UpcommingTripsId)) {
    return NextResponse.json({ success: false, message: 'Invalid UpcommingTrips ID' }, { status: 400 });
  }

  try {
    const UpcommingTripsData = await UpcommingTrips.findById(UpcommingTripsId);  // Use findById for UpcommingTripsId
    if (!UpcommingTripsData) {
      return NextResponse.json({ success: false, message: 'UpcommingTrips not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: UpcommingTripsData.trips });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
