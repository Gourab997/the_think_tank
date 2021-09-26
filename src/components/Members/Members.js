import React from "react";
import "./Members.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faUser} />;
const Members = (props) => {
  const { name, role, age, famous_As, image, salary } = props.Committee;
  return (
    <div className='members '>
      <img src={image} alt='' />
      <h5>Name: {name}</h5>
      <h5>Position: {role}</h5>
      <h5>Age:{age}</h5>
      <p>Work as: {famous_As}</p>
      <p>Salary: ৳ {salary}</p>

      <button
        className='btn draw-border text-info'
        onClick={() => props.handleMembers(props.Committee)}
      >
        {" "}
        add new Member {element}
      </button>
    </div>
  );
};

export default Members;
