import React, { useState } from 'react';

const Menubar = () => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Burger', description: 'A delicious burger with all the fixings.', price: 10.99 },
    { name: 'Pizza', description: 'Our signature pizza with your choice of toppings.', price: 12.99 },
    { name: 'Pasta', description: 'Homemade pasta served with your choice of sauce.', price: 11.99 },
  ]);

  return (
    <div className="">
      <h1>Restaurant Menubar
      </h1>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menubar;