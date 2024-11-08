import React from 'react';
import './Card.scss'
const Card = ( {title="Пока не указано", price="Не указано", photo} ) => {
  return (
    <>
    <h2>{title}</h2>
      <div className="card">
        <img src={photo} alt=""/>
        <h3>{title}</h3>
        <p>{price}</p>
        <button>Купить</button>
      </div>
    </>
  );
};

export default Card;
