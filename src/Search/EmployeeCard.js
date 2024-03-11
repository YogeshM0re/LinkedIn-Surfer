import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-blue-500 transition duration-300 ease-in-out ">
      <div className="flex-none">
        <img
          src={employee.profilePic}
          alt={employee.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
        />
      </div>
      <div className="ml-6">
        <h3 className="text-2xl font-bold text-gray-800">{employee.name}</h3>
        <p className="text-gray-600">{employee.designation}</p>
        <div className="flex mt-3 space-x-3">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full focus:outline-none hover:bg-blue-800 transition duration-300 ease-in-out">
            Email
          </button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full focus:outline-none hover:bg-green-800 transition duration-300 ease-in-out">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
