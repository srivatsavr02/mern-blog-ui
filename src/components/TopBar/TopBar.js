import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './TopBar.css'

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='top'>
        <div className='topLeft'>
          <i className="topIcon  fa-brands fa-facebook-square"></i>
          <i className="topIcon  fa-brands fa-twitter-square"></i>
          <i className="topIcon  fa-brands fa-pinterest-square"></i>
          <i className="topIcon  fa-brands fa-instagram-square"></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link to="/" className='link'>HOME</Link>
            </li>
            <li className='topListItem'>
              <Link to="/" className='link'>ABOUT</Link>
            </li>
            <li className='topListItem'>
              <Link to="/" className='link'>CONTACT</Link>
            </li>
            <li className='topListItem'>
              <Link to="/write" className='link'>WRITE</Link>
            </li>
            <li className='topListItem' onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className='topRight'>
          {
            user ? (
              <Link to='/settings'>
                <img
                  className="topImg"
                  src={PF+user.profilePic}
                  alt=""
                />
              </Link>
            ) : (
              <ul className='topList'>
                <li className='topListItem'>
                  <Link className='link' to='/login'>LOGIN</Link>
                </li>
                <li className='topListItem'>
                  <Link className='link' to='/register'>REGISTER</Link>
                </li>
              </ul>
            )
          }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  );
}

export default TopBar;
