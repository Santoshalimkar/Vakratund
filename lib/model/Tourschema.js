// models/Package.js
import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  packageId: {
    type: String,
    required: true,
    unique: true
  },
  packageName: {
    type: String,
    required: true
  },
  thumbnailImage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  trips: [
    {
      tripType: {
        type: String,
        required: true
      },
      images: [
        {
          type: String,
          required: true
        }
      ],
      price: {
        type: Number,
        required: true
      },
      tripDescription: {
        type: String,
        required: true
      },
      days: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      itinerary: [
        {
          day: {
            type: String,
            required: true
          },
          activity: {
            type: String,
            required: true
          }
        }
      ]
    }
  ]
});

export default mongoose.models.Package || mongoose.model('Package', PackageSchema);
