import React from 'react';
import './Item.css'


const Item = (props) => {
    return (
        <div className='dvi'>
            <div className="dv">
                <img src={props.it.strMealThumb} alt="" />
            </div>
            <div className="inf">
                <h2>{props.it.strMeal}</h2>
                <p>{props.it.strArea}</p>
                <p>{props.it.strCategory}</p>
            </div>
           <button onClick={()=> props.fc(props.it)}>
               <p>Add To Cart</p>
           </button>

        </div>
    );
};

export default Item;