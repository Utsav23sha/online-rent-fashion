import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Dresses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='MEN'
              path='/clothing'
            />
            <CardItem
              src='images/img-2.jpg'
              text='FEMALE'
              path='/clothing'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='ACCESSORIES'
              path='/accessories'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;