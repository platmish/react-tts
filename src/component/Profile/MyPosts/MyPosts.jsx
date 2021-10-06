import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Привет всем'/>
                <Post message='Как дела'/>
            </div>
        </div>
    )
}

export default MyPosts;
