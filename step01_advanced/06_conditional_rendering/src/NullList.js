import React from 'react'

function Item({name, isPacked}) {
    if (isPacked) {
        return null;
      }
      return <li className="item">{name}</li>;
}

function NullList() {
  return (
    <section>
      <h1>Sally Ride's Packing List 2</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  )
}

export default NullList