import React from "react";
import "./Cartname.css";

const Cartname = (props) => {
  const { image, name } = props.members;
  return (
    <div>
      <div className=' card m-3 p-3 '>
        <div>
          <img
            className='card-img '
            style={{
              height: "50px",
              width: "50px",
            }}
            src={image}
            alt=''
          />
        </div>

        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartname;
