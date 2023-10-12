import { React } from 'react';
import Avatar from './Avatar.js';
import Profiles from './Profiles.js';
import './App.css';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );

}

function Avatars() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <>
    <Avatars />
     <br />
      <Profiles />
      <br />
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>

    </>
  );
}
