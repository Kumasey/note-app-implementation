import React from 'react';

const FoodItems = ({ item }) => {
  return (
    <div>
      <img src={item.product_img} alt="" />
      <h4>{item.name}</h4>
      <p>N{item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default FoodItems;
