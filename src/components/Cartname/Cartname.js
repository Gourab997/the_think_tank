import React from "react";
import "./Cartname.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faCheck} />;

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
          <p>
            {name} <span className="icons">{element}</span>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartname;
