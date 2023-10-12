import React from "react";
import Avatar from "./Avatar";



export default function Profiles() {
  return (
    <div>
      <Avatar
        size={200}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />

      <Avatar
        size={100}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={80}
        person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
        }}


        
    
      />
    </div>
  );
}
