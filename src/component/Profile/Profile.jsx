import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://doc-08-48-docs.googleusercontent.com/docs/securesc/rle597aapd57mu3vrteo7tpcdesp6762/k1ob2ajqv4tsp56a5afp05ktchirfnrk/1633492200000/14896445441772211947/14896445441772211947/1mi8gc_XqvNA_M6D33DzeoW5wfFJEslY7?e=download&authuser=0&nonce=oaq2n4j9qntmo&user=14896445441772211947&hash=uoj0knafd28519knfog4ramqjmq3097b'/>
            </div>
            <div>
                ava
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
