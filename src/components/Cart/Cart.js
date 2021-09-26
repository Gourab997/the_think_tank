import React from "react";
import Cartname from "../Cartname/Cartname";

import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;

    for (const members of cart) {
      totalQuantity = totalQuantity + 1;
      total = parseInt(total) + parseInt(members.salary);
    }
  

  return (
    <div className='carts  p-5'>
      <div className='cards'>
        <h5 className='d-inline'>Members Added : {totalQuantity}</h5> <br />
        <h6 className='d-inline'>Total Salary: ৳ {total} </h6>
      </div>

      <div className=' m-3'>
        {cart.map((members) => (
          <Cartname key={members.id} members={members}></Cartname>
        ))}
      </div>
    </div>
  );
};

export default Cart;
