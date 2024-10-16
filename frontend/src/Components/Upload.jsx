import app from "../firebase"; // Import Firebase configuration
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
  const [file, setFile] = useState(null); // Track selected file
  const [isUploading, setIsUploading] = useState(false); // Track upload status
  const [name, setName] = useState(""); // Track name input

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value); // Set the name from input
  };

  // Handle file upload to Firebase and send URL to backend
  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a file first.");
      return;
    }
    if (!name) {
      toast.error("Please enter a title.");
      return;
    }

    setIsUploading(true); // Set upload status to true

    try {
      // Upload file to Firebase Storage
      const storage = getStorage(app);
      const storageRef = ref(storage, `/files/${file.name}`); // Reference with unique path
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef); // Get the download URL

      // Send file URL and name to backend
      await axios.post("https://fire-store-api-wheat.vercel.app/api/files/upload", {
        fileURL: downloadURL,
        topic: name
      });

      toast.success("File uploaded and URL saved successfully!");
      setFile(null); // Clear the file input
      setName(""); // Clear the name input
    } catch (error) {
      console.error("Error uploading file:", error); // Log the error details
      toast.error("Failed to upload the file or save the URL.");
    } finally {
      setIsUploading(false); // Reset upload status
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <ToastContainer /> {/* Toast container to display notifications */}
      <div className="card bg-[#2a2929] text-[#fff] w-96 shadow-xl">
        <div className="mx-auto p-10">
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <input
            type="text"
            onChange={handleNameChange} // Use the correct handler for name input
            placeholder="Title"
            className="mt-5 input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="card-body">
          <p>Upload a file here...</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={isUploading} // Disable button during upload
            >
              {isUploading ? "Uploading..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
