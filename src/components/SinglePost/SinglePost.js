import React from 'react';
import './SinglePost.css';

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Srivatsav R</b>
                </span>
                <span className="singlePostDate">1 hr ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque odio minus, non ex praesentium quia, ullam perspiciatis tempora iusto minima laborum corrupti fuga atque assumenda aliquam consectetur. Cum, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus dicta, recusandae laborum nemo placeat distinctio natus at eveniet praesentium. Quam itaque est atque officiis doloribus magnam soluta, labore perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis voluptatibus perferendis laudantium qui doloribus, sit, ipsam nemo quaerat facilis odit in doloremque ea tenetur fuga, eligendi maiores ex. Iste! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
  );
}

export default SinglePost;
