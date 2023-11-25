import React, { useState, useEffect } from "react";
import { calculateRates } from "../calculate";
import { useNavigate } from "react-router-dom";

export default function RateBrackdown() {
  const navigate = useNavigate();

  const [pro, setPro] = useState("");
  const [kms, setKms] = useState("");
  const [hour, setHour] = useState("");
  const [hours, setHours] = useState("");
  const [towTruck, setTowTruck] = useState("");
  const [cost, setCost] = useState("");

  const a = localStorage.getItem("pickup");
  const b = localStorage.getItem("dropoff");
  const l = localStorage.getItem("length");
  const w = localStorage.getItem("weight");
  const h = localStorage.getItem("height");

  useEffect(() => {
    // Call the calculateRates function and get the calculated values
    const { pro: newPro, kms: newKms, hour: newHour, hours: newHours, towTruck: newTowTruck, cost: newCost  } = calculateRates(a, b, l, h, w);

    // Set the state with the calculated values
    setPro(newPro);
    setKms(newKms);
    setHour(newHour);
    setHours(newHours);
    setTowTruck(newTowTruck);
    setCost(newCost);
  }, [a, b, l, h, w]);


  const handleClick = () => {
    navigate("/");
    localStorage.clear();
  }

  return(
    <>
      <h1 className="tc">Rate Breakdown</h1>
      <div className="out">
        <div className="container d-grid gap-2 col-6 mx-auto">
          <span className="pro-span">Closest Provider</span> <p>{pro}</p>
          <span>Tow Truck</span> <p>{towTruck}</p>
          <span>$/HR</span> <p>{hour}</p>
          <span>Total HR</span> <p>{hours}</p>
          <span>Total KM</span> <p>{kms}</p>
          <span>Total Cost</span> <p>{cost}</p>
          <button onClick={handleClick} className="btn">Finished/Restart</button>
        </div>
      </div>
    </>
  )
}