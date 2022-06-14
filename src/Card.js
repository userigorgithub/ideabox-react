import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <button onClick={() => props.deleteIdeaTotally(props.id)}>🗑</button>
      
    </div>
  )
}

export default Card;
