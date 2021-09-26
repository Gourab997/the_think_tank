import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Members from "../Members/Members";
import "./Committee.css";

const Committee = () => {
  const [committees, setComittees] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("./committee_members.json")
      .then((res) => res.json())
      .then((data) => setComittees(data));
  }, []);

  const handleMembers = (commitee) => {
    const newCart = [...carts, commitee];
    setCart(newCart);
  };

  return (
    <div className='container committeCart '>
      <div className='committee'>
        {committees.map((committee) => (
          <Members
            key={committee.id}
            Committee={committee}
            handleMembers={handleMembers}
          ></Members>
        ))}
      </div>

      <div className='m-5 cart '>
        {/* {carts.map(cart=><Cart key={cart.id} cart ={cart} ></Cart>) } */}
        <Cart cart={carts}></Cart>
      </div>
    </div>
  );
};

export default Committee;
