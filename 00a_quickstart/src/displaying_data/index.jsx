import React from 'react';
import './index.css';

const user = {
    name: 'Fatima Shahzad',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/007/301/732/non_2x/portrait-hijab-cute-girl-cartoon-illustration-free-vector.jpg',
    imageSize: 90,
};

export default function Profile () {
    return (
        <>
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt="" className='avatar' style={{
            width: user.imageSize,
            height: user.imageSize
        }}/>
        </>
    )
}