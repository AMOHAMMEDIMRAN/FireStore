import { FaUpload } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import {Link} from "react-router-dom"

const Card = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-between items-center">
      <div className="card bg-[#2a2929] w-96 shadow-xl">
        <figure className="p-10">
          <FaUpload color="#fff" size={150}/>
        </figure>
        <div className="card-body bg-[#CBD2A4] text-[#000]">
          <h2 className="card-title">Upload here</h2>
          <p>Upload your file here Ashii...</p>
          <div className="card-actions justify-end">
           <Link to="/uploadfile">
             <button className="btn btn-primary">Upload</button>
           </Link>
          </div>
        </div>
      </div>
      <div className="card bg-[#2a2929] w-96 shadow-xl">
        <figure className="p-10">
          <FaFileDownload color="#fff" size={150}/>
        </figure>
        <div className="card-body bg-[#CBD2A4] text-[#000]">
          <h2 className="card-title">Get here</h2>
          <p>Get your file here Ashii...</p>
          <div className="card-actions justify-end">
            <Link to="/getfile">
            <button className="btn btn-primary">Get</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
