import React from 'react'

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];


function List1() {
    const ListItem = people.map(person => 
        <li>{person}</li>
        )
  return (
    <ul>{ListItem}</ul>
  )
}

export default List1