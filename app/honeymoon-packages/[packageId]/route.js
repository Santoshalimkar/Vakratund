// // app/api/packages/[packageId]/route.js
// import dbConnect from '@/lib/Dbconnection/Dbconnect';
// import UpcommingTrips from '../../../../lib/model/UpcommingTripsschema';
// import { NextResponse } from 'next/server';
// import mongoose from 'mongoose';

// export async function GET(req,  { params }) {
//   await dbConnect();

//   const { packageId } = params;
//   console.log(packageId)

//   if (!mongoose.Types.ObjectId.isValid(packageId)) {
//     return NextResponse.json({ success: false, message: 'Invalid Package ID' }, { status: 400 });
//   }

//   try {
//     const packageData = await UpcommingTrips.findById(packageId);
//     if (!packageData) {
//       return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
//     }
//     return NextResponse.json({ success: true, data: packageData });
//   } catch (error) {
//     console.error('Error fetching package:', error); // Log the error for debugging
//     return NextResponse.json({ success: false, message: error.message }, { status: 400 });
//   }
// }
