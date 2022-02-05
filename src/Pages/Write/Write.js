import React, { useContext, useState } from 'react';
import './Write.css';
import axios from '../../axios';
import { Context } from "../../context/Context";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);
  const [uploadError, setUploadError] = useState(false);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setDisable(true);
      const newPost = {
          username: user.username,
          title,
          desc
      }

      if(file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data, { headers:  {authorization: "Bearer " + user.accessToken} })
                        .then((res) => (newPost.photo = res.data.fileId));
          } catch (err) {
            setUploadError(true);
          }
      }
       try {
            const res = await axios.post("/posts", newPost, {
                headers: {authorization: "Bearer " + user.accessToken}
            });
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            setError(true);
        }
        setDisable(false);
    };

  return (
    <div className='write'>
        {uploadError && <span className='uploadError'>Upload failed!</span>}
        {error && <span className='postError'>Invalid post!</span>}
        {file && (
            <img
                className="writeImg"
                src={URL.createObjectURL(file)}
                alt=""
            />
        )}
        
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} 
                    onChange={(e) => setFile(e.target.files[0])} 
                />
                <input className="writeInput" placeholder="Title" type="text" autoFocus={true} 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="writeFormGroup">
                <textarea className="writeInput writeText" placeholder="Tell your story..." type="text" autoFocus={true} 
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>

            <button className="writeSubmit" type="submit" disabled={disable}>
                Publish
            </button>
        </form>
    </div>
  );
}

export default Write;

