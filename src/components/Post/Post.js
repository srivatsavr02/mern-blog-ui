import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

function Post({post}) {
  const PF =  `https://lh3.googleusercontent.com/d/${post.photo}`;

  return (
    <div className='post'>
        {post.photo && (
          <img
            src={PF}
            referrerPolicy="no-referrer"
            alt=""
            className="postImg"
          />
        )}
        

        <div className="postInfo">
            <div className="postCats"> 
              {post.categories.map((c) => (
                <span className="postCat">{c.name}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className='link'>
            <span className="postTitle">{post.title}</span>
            </Link>
            
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>{post.desc}</p>
    </div>
  );
}

export default Post;
