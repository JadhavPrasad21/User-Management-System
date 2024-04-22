import React, { useState, useEffect } from "react";
import "./style.css";

const Table = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    if (localStorageData) {
      setUserData(localStorageData);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "userData") {
        const updatedData = JSON.parse(e.newValue);
        setUserData(updatedData);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      // Clear table data from state when component unmounts
      setUserData([]);
    };
  }, []);

  const handleDelete = (index) => {
    console.log("Deleting record at index:", index);
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1); // Remove the item at the specified index
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  return (
    <div className="user-data-container">
      <h1 className="user-data-title">User Data</h1>
      <table className="user-data-table">
        <thead>
          <tr>
            <th className="user-data-header">Name</th>
            <th className="user-data-header">Email</th>
            <th className="user-data-header">Phone</th>
            <th className="user-data-header">Address</th>
            <th className="user-data-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className="user-data-row">
              <td className="user-data-cell">{user.name}</td>
              <td className="user-data-cell">{user.email}</td>
              <td className="user-data-cell">{user.phone}</td>
              <td className="user-data-cell">{user.address}</td>
              <td className="user-data-cell">
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "2rem",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
