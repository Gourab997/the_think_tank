import React from 'react';

const Cart = (props) => {
    const{cart} = props
    let totalQuantity = 0;
    let total = 0;
    for (const members of cart) {
        totalQuantity = totalQuantity+ 1 
        total = parseInt (total) +parseInt (members.salary)
    }
    return (
        <div>
            <h4>Members Added : { totalQuantity}</h4>
            <h5>Total Salary: {total} </h5>
        </div>
    );
};

export default Cart;