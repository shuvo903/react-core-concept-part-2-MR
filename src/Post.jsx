import React from 'react';

const Post = ({post}) => {

const {body,title} = post
    
    return (
        <div className='card'>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;