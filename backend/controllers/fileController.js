import asyncHandler from 'express-async-handler'; // Ensure you're importing asyncHandler
import File from '../model/fileModel.js'; // Adjust the import based on your project structure


export const uploadFile = asyncHandler(async (req, res) => {
    const { fileURL, topic } = req.body; // Get fileURL and topic from request body
  
    // Check if fileURL and topic are provided
    if (!fileURL || !topic) {
      return res.status(400).json({ message: "File URL and topic are required." });
    }
  
    // Check if the file already exists
    const existingFile = await File.findOne({ fileURL });
    if (existingFile) {
      return res.status(400).json({ message: "File already exists." });
    }
  
    // Save new file URL in the database
    const newFile = new File({ fileURL, topic }); // Save both fields
    await newFile.save();
  
    // Return response
    res.status(201).json({
      _id: newFile._id,
      topic: newFile.topic,
      url: newFile.fileURL, // Ensure you're returning the correct field
    });
  });


  export const getFiles = asyncHandler(async (req, res) => {
    try {
      const files = await File.find(); // Fetch all files from the database
      res.status(200).json(files); // Respond with the files in JSON format
    } catch (error) {
      res.status(500).json({ message: "Server error occurred while fetching files." });
    }
  });
  