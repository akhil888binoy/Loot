import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    eventPhoneNumber: {
      type: Number,
      required: true,
    },
    marketingPlan: {
      type: Array,
      default: [],
    },
    speakers: {
      type: Array,
      default: [],
    },
    picturePath: {
      type: String,
      default: " ",
    },
    sponsorPicturePath: {
      type: Array,
      default: [],
    },
    eventPicturePath: {
      type: Array,
      default: [],
    },
    eventlocation: String,
    location: String,
    description: String,
    sponsorName: String,
    eventAgenda: String,

    FAQ: String,

    likes: {
      type: Map,
      of: Boolean,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Event", eventSchema);
export default Event;
