import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import './Settings.css';

function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Your Account</span>
                <span className="settingsTitleDelete">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPfW_5lziQSBfJY73Tbp2dFfG1MhxzELpdw&usqp=CAU"
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} className="settingsPPInput" />
                </div>

                <label>Username</label>
                <input type="text" placeholder="Srivatsav" name="name" />
                
                <label>Email</label>
                <input type="email" placeholder="srivatsavr02@gmail.com" name="email" />
                
                <label>Password</label>
                <input type="password" placeholder="Password" name="password" />
                
                <button className="settingsSubmitButton" type="submit">
                    Update
                </button>
            </form>
        </div>
        <SideBar />
    </div>
  );
}

export default Settings;
