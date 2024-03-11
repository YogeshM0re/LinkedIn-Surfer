// EmployeeCard.js

import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="img-container">
        <img src={employee.profilePic} alt={employee.name} />
      </div>
      <div className="info-container">
        <h3>{employee.name}</h3>
        <p>{employee.designation}</p>
        <div className="button-container">
          <button className="email">Email</button>
          <button className="connect">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
