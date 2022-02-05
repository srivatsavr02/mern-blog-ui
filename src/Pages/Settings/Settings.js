import React, { useContext, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Context } from '../../context/Context';
import './Settings.css';
import axios from '../../axios';

function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(false);

  const PF = `https://lh3.googleusercontent.com/d/`;

  const handleDelete = async () => {
    try {
        await axios.delete("/users/" + user._id, {
            headers: {authorization: "Bearer " + user.accessToken},
            data: {userId: user._id}
        });
        dispatch({
            type:"LOGOUT",
        });
        window.location.replace("/");
    } catch (err) {
        
    }
  }
  
  const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        dispatch({type: "UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
              await axios.post("/upload", data , {headers: {authorization: "Bearer " + user.accessToken}})
                        .then((res) => (updatedUser.profilePic = res.data.fileId));
            } catch (err) {
  
            }
        }

        try {
            const res = await axios.put("/users/"+user._id, updatedUser, {
                headers: {authorization: "Bearer " + user.accessToken}
            });  
            setSuccess(true); 
            dispatch({
                type: "UPDATE_SUCCESS", 
                payload: {...res.data, accessToken: user.accessToken}
            });
        } catch (err) {
            dispatch({type: "UPDATE_FAILURE"});
        }
        setDisable(false);
    };
    

  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Your Account</span>
                <span className="settingsTitleDelete" onClick={handleDelete} >Delete Account</span>
            </div>

            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                        src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                        referrerPolicy="no-referrer"
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} className="settingsPPInput" 
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>

                <label>Username</label>
                <input type="text" placeholder={user.username} name="name" 
                    onChange={(e) => setUsername(e.target.value)} required
                />
                
                <label>Email</label>
                <input type="email" placeholder={user.email} name="email" 
                    onChange={(e) => setEmail(e.target.value)} required
                />
                
                <label>Password</label>
                <input type="password"  name="password" 
                    onChange={(e) => setPassword(e.target.value)} required
                />
                
                <button className="settingsSubmitButton" type="submit" disabled={disable} >
                    Update
                </button>
                {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated...</span>}
            </form>
        </div>
        <SideBar />
    </div>
  );
}

export default Settings;
