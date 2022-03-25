import './App.css';
import { useEffect, useState } from 'react';
import Item from './components/Item/Item';
import Cart from './components/Item/Cart/Cart';

function App() {
  const [item, Setitem] = useState([]);
  const [cart, Setcart] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
      .then(res => res.json())
      .then(data => Setitem(data.meals))
  }, [])

  const c = p => {
    let ct = [...cart, p];
    Setcart(ct);
  }

  let x = 0;
  for (const e of cart) {
    x = x + parseFloat(e.idMeal);
  }

  return (
    <div className='ap'>
      <div className='items'>
        {
          item.map(i => <Item it={i} key={i.idMeal} fc={c}></Item>)
        }
      </div>
      <div className='cad'>

        <h1 className='hl'>Total items: {cart.length}</h1>
        <h2 className='hl'>Total ID: {x}</h2>
        <div className="ctd">

          {
            cart.map(m => <Cart l={m}></Cart>)
          }

        </div>
      </div>
    </div >
  );
}

export default App;
