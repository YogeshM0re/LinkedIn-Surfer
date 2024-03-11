import React, { useState } from "react";
import "./Chart.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const employeeData = [
     {
       id: 1,
       name: "John Doe",
       profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
       designation: "Software Engineer",
       location: "New York, USA",
     },
     {
       id: 2,
       name: "Jane Smith",
       profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
       designation: "QA Engineer",
       location: "Mumbai, IND",
     },
     {
       id: 3,
       name: "Alice Johnson",
       profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
       designation: "Software Engineer",
       location: "DC Washington, USA",
     },
     {
       id: 4,
       name: "Bob Williams",
       profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
       designation: "Data Scientist",
       location: "New York, USA",
     },
     {
       id: 5,
       name: "Eva Brown",
       profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
       designation: "Data Scientist",
       location: "DC Washington, USA",
     },
     {
       id: 6,
       name: "Charlie Miller",
       profilePic: "https://randomuser.me/api/portraits/men/46.jpg",
       designation: "UI/UX Designer",
       location: "DC Washington, USA",
     },
     {
       id: 7,
       name: "Sophie Anderson",
       profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
       designation: "Front-end Developer",
       location: "Mumbai, IND",
     },
     {
       id: 8,
       name: "David Wilson",
       profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
       designation: "Back-end Developer",
       location: "New York, USA",
     },
     {
       id: 9,
       name: "Olivia White",
       profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
       designation: "Product Manager",
       location: "New York, USA",
     },
     {
       id: 10,
       name: "Aaron Johnson",
       profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
       designation: "Back-end Developer",
       location: "Pune, IND",
     },
     {
       id: 11,
       name: "Emma Watson",
       profilePic: "https://randomuser.me/api/portraits/women/19.jpg",
       designation: "Software Engineer",
       location: "Pune, IND",
     },
     {
       id: 12,
       name: "Michael Jordan",
       profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
       designation: "Software Engineer",
       location: "Pune, IND",
     },
     {
       id: 13,
       name: "Taylor Swift",
       profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
       designation: "Front-end Developer",
       location: "Pune, IND",
     },
     {
       id: 14,
       name: "Justin Bieber",
       profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
       designation: "Front-end Developer",
       location: "Pune, IND",
     },
   ];
   

const ChartComponent = () => {
  const [currentChartIndex, setCurrentChartIndex] = useState(0);

  // Prepare data for the designation chart
  const designationFrequency = employeeData.reduce((acc, employee) => {
    acc[employee.designation] = (acc[employee.designation] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(designationFrequency);
  const dataValues = Object.values(designationFrequency);

  // Prepare data for the location chart
  const locationFrequency = employeeData.reduce((acc, employee) => {
    acc[employee.location] = (acc[employee.location] || 0) + 1;
    return acc;
  }, {});

  const locationLabels = Object.keys(locationFrequency);
  const locationDataValues = Object.values(locationFrequency);

  const chartsData = [
    {
      labels: labels,
      datasets: [
        {
          label: "Number of Employees",
          data: dataValues,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    {
      labels: locationLabels,
      datasets: [
        {
          label: "Number of Employees",
          data: locationDataValues,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
  ];

  const options = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div>
      <h2>{`${currentChartIndex === 0 ? "designation" : "Location"} Chart`}</h2>
      <button
        className="chart-next-button"
        onClick={() =>
          setCurrentChartIndex(
            (prevIndex) => (prevIndex + 1) % chartsData.length
          )
        }
      >
        Next Chart
      </button>
      <Bar data={chartsData[currentChartIndex]} options={options} />
    </div>
  );
};

export default ChartComponent;
