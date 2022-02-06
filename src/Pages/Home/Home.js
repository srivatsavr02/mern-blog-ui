import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
          <Posts posts={posts} />
          <SideBar />
      </div>
    </>
  );
}

export default Home;
