import mongoose from 'mongoose';

const honeymoonpackagesschema = new mongoose.Schema({
  packageId: {
    type: String,
    unique: true,
    default: function() {
      return new mongoose.Types.ObjectId().toString(); // Automatically generate a unique ID
    } // Automatically generate a unique ID
  },
  packageName: {
    type: String,
    required: true,
  },
  startingPrice: {
    type: String,
    required: true,
  },
  thumbnailImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  trips: [
    {
      tripTitle: {
        type: String,
        required: true,
      },
      tripType: {
        type: String,
        required: true,
      },
      tripDate: {
        type: String,
        required: true,
      },
      images: {
        type: String,
        required: true,
      },
      galleryImages: [
        {
          type: String,
          required: true,
        },
      ],
      inclusions: [
        {
          type: String,
          required: true,
        },
      ],
      exclusions: [
        {
          type: String,
          required: true,
        },
      ],
      price: {
        type: Number,
        required: true,
      },
      discountprice: {
        type: Number,
        required: true,
      },
      tripDescription: {
        type: String,
        required: true,
      },
      days: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      fromLocation: {
        type: String,
        required: true,
      },
      pdfUrl: {
        type: String,
      },
      itinerary: [
        {
          day: {
            type: String,
            required: true,
          },
          activity: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

export default mongoose.models.HoneymoonTrips || mongoose.model('HoneymoonTrips', honeymoonpackagesschema);
