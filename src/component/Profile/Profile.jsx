import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className='content'>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;
