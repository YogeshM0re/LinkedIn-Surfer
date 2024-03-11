import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard.js";
import "./SearchPage.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Chart from "../Chart/Chart.jsx";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [companyDetails, setCompanyDetails] = useState({
    name: "Acumen Cognitive Engineering",
    location: "Mumbai, India",
    industry: "IT Services and IT Consulting",
    size: "51-200 employees",
    headquarters: "Mumbai, Maharashtra",
    overview:
      "We are a Software Engineering company focused on providing outsourced software development and software engineering teams to our clients globally. Our team has over 22 years of experience in software, and a very wide-ranging domain and technology exposure. We work with global clients ranging from multi-million-dollar companies to startups.",
    website: "http://www.acumen.llc",
  });

  const [employees, setEmployees] = useState([
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
      name: "Aaron Johnson",
      profilePic: "https://randomuser.me/api/portraits/women/19.jpg",
      designation: "Software Engineer",
      location: "Pune, IND",
    },
    {
      id: 12,
      name: "Aaron Johnson",
      profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
      designation: "Software Engineer",
      location: "Pune, IND",
    },
    {
      id: 13,
      name: "Aaron Johnson",
      profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
      designation: "Front-end Developer",
      location: "Pune, IND",
    },
    {
      id: 14,
      name: "Aaron Johnson",
      profilePic: "https://randomuser.me/api/portraits/women/20.jpg",
      designation: "Front-end Developer",
      location: "Pune, IND",
    },
  ]);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleWebsiteClick = () => {
    const iframe = document.createElement("iframe");
    iframe.src = companyDetails.website;
    iframe.style.position = "fixed";
    iframe.style.top = "20%";
    iframe.style.left = "20%";
    iframe.style.width = "65%";
    iframe.style.height = "65%";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
    iframe.style.backgroundColor = "white";
    iframe.id = "companyWebsiteIframe";
    const blurOverlay = document.createElement("div");
    blurOverlay.className = "blur-overlay";
    blurOverlay.id = "blurOverlay";

    document.body.appendChild(blurOverlay);

    const closeIcon = document.createElement("div");
    closeIcon.innerHTML = "&#10006;";
    closeIcon.id = "closeIcon";
    closeIcon.style.position = "fixed";
    closeIcon.style.top = "20%";
    closeIcon.style.right = "13%";
    closeIcon.style.fontSize = "20px";
    closeIcon.style.cursor = "pointer";
    closeIcon.style.zIndex = "9999";

    closeIcon.addEventListener("click", () => {
      document.body.removeChild(iframe);
      document.body.removeChild(closeIcon);
      document.body.removeChild(blurOverlay);
    });

    document.body.appendChild(iframe);
    document.body.appendChild(closeIcon);

    iframe.contentWindow.addEventListener("click", () => {
      document.body.removeChild(iframe);
      document.body.removeChild(closeIcon);
      document.body.removeChild(blurOverlay);
    });
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPageCount = Math.ceil(filteredEmployees.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <div>
      <Header />
      <div className="search-page">
        <div className="controls">
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search by name or designation..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="page-count">
            Page {currentPage} of {totalPageCount}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPageCount}
          >
            Next
          </button>
        </div>
        <div className="content">
          <div className="company-details-container">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQE4_DlFURCeJg/company-logo_200_200/0/1645358686351/acumenengineering_logo?e=1718236800&v=beta&t=EHTQGsXzrBrqpwoctEAA7MZmRdg0GwtzVXX81o_MzOU"
              alt="companyLogo"
              className="company-logo"
            />
            <h2>{companyDetails.name}</h2>
            <p>{companyDetails.location}</p>
            <div className="additional-details">
              <div className="tabs">
                <span className="tab">Home</span>
                <span className="tab">About</span>
                <span className="tab">Posts</span>
                <span className="tab">Jobs</span>
                <span className="tab">People</span>
              </div>
              <p>Industry: {companyDetails.industry}</p>
              <p>Company size: {companyDetails.size}</p>
              <p>Headquarters: {companyDetails.headquarters}</p>
              <p>Overview: {companyDetails.overview}</p>
              <p className="website">
                Company Website:{" "}
                <a onClick={handleWebsiteClick}>{companyDetails.website}</a>
              </p>
            </div>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>

          <div className="employee-cards-container">
            <div className="employee-list-container">
              <Chart />
            </div>
            <div className="employee-data">
              {currentEmployees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
