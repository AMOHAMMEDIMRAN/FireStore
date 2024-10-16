import { useEffect, useState } from "react";
import axios from "axios";

const Get = () => {
  const [items, setItems] = useState([]); // State to hold fetched items
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchItems = async () => {
      try {

        const response = await axios.get("https://firestoreapi-ib0z.onrender.com/api/files/upload"); // Adjusted endpoint to get all files
        setItems(response.data); // Set the fetched items to state
      } catch (error) {
        setError("Failed to fetch items."); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchItems(); // Call the fetch function
  }, []); // Empty dependency array means it runs once on mount

  // Render loading state, error, or the list of items
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-[#000] text-[3rem] font-semibold">Get the items here Ashii...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"> {/* Responsive grid layout */}
        {items.map((item) => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-4"> {/* Card styles */}
            <h2 className="text-lg font-bold">{item.topic}</h2> {/* Display the topic */}
            <a download href={item.fileURL} className="text-gray-600">Download</a> {/* Display the file URL */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Get;
