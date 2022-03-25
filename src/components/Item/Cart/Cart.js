import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='mv'>
            <div className='imd'>
            <img src={props.l.strMealThumb} alt="" />
            </div>
            <div className='infor'>
            <h3>{props.l.strMeal}</h3>
            <p>ID:{props.l.idMeal}</p>
            </div>
        </div>
    );
};

export default Cart;