import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./style.css";
import { TbReload } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [color, setColor] = useState("#ccc"); // Initial color is light grey

  // Load count from local storage on initial render
  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(parseInt(storedCount));
    } else {
      // If count not available in local storage, fetch it from Firestore
      const fetchCount = async () => {
        try {
          const docRef = db.collection("counters").doc("counter1");
          const docSnap = await docRef.get();
          if (docSnap.exists()) {
            setCount(docSnap.data().count);
            setLevel(docSnap.data().count * 10);
            setColor(count === 0 ? "#ccc" : `hsl(${count * 10}, 100%, 50%)`); // Set initial color
          }
        } catch (error) {
          console.error("Error fetching count from Firestore:", error);
        }
      };
      fetchCount();
    }
  }, []);

  // Updated local storage and Firestore when count changes
  useEffect(() => {
    const updateCount = async () => {
      try {
        // Update local storage
        localStorage.setItem("count", count.toString());
        // Update Firestore
        const docRef = db.collection("counters").doc("counter1");
        await docRef.set({ count });
      } catch (error) {
        console.error("Error updating count:", error);
      }
    };

    updateCount();
    setColor(count === 0 ? "#ccc" : `hsl(${count * 10}, 100%, 50%)`); // Updating color when count changes
  }, [count]);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    setLevel((prevLevel) => prevLevel + 10);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setLevel((prevLevel) => prevLevel - 10);
    }
  };

  const resetCount = () => {
    setCount(0);
    setLevel(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter-level" style={{ backgroundColor: color }}></div>
      <div className="counter-info">
        <p style={{ fontWeight: "800", fontSize: "2rem" }}>{count}</p>
      </div>
      <div className="counter-buttons">
        <button className="counter-button" onClick={increaseCount}>
          <FaPlus />
        </button>
        <button className="counter-button" onClick={decreaseCount}>
          <FaMinus />
        </button>
        <button className="counter-button" onClick={resetCount}>
          <TbReload />
        </button>
      </div>
    </div>
  );
};

export default Counter;
