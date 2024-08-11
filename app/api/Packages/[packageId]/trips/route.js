// app/api/packages/[packageId]/trips/route.js
import dbConnect from '@/lib/Dbconnection/Dbconnect';
import Package from '@/lib/model/Tourschema';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  await dbConnect();

  const { packageId } = params;  // Capture the packageId from params

  console.log('packageId:', packageId);  // Debug: Log packageId to ensure it's captured
  
  if (!mongoose.Types.ObjectId.isValid(packageId)) {
    return NextResponse.json({ success: false, message: 'Invalid Package ID' }, { status: 400 });
  }

  try {
    const packageData = await Package.findById(packageId);  // Use findById for packageId
    if (!packageData) {
      return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: packageData.trips });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
