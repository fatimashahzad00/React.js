import React from 'react'
import { people } from './data'
import { getImageUrl } from './utils'

function List2() {
  const chemist = people.filter(person => 
    person.profession === 'chemist'
    );

    const ListItems = chemist.map(person =>
      <li>
        <img src={getImageUrl(person)} alt={person.name} />

        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
      )
  return (
    <ul>{ListItems}</ul>
  )
}

export default List2