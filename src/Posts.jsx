import React, { use } from 'react';
import Post from './Post';

const Posts = ({postsPromise}) => {

const posts =  use(postsPromise)

console.log(posts);

    return (
        <div>
            <h2>All post are hear : {posts.length}</h2>
            {
                posts.map(post => <Post key={posts.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;