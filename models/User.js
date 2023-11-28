import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    link: String,
    price: Number,
    description: String,
    tags: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
