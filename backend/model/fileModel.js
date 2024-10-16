import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    fileURL: { // Updated field name for consistency
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);
export default File;
