
import React, { useState, useEffect } from "react";
import { calculateRates } from "../calculate";
import { useNavigate } from "react-router-dom";

export default function Rate() {
  const navigate = useNavigate();

  const [pro, setPro] = useState("");
  const [kms, setKms] = useState("");
  const [hour, setHour] = useState("");
  const [hours, setHours] = useState("");
  const [towTruck, setTowTruck] = useState("");

  // Fetch values from localStorage or any other source
  const a = localStorage.getItem("pickup");
  const b = localStorage.getItem("dropoff");
  const l = localStorage.getItem("length");
  const w = localStorage.getItem("width");
  const h = localStorage.getItem("height");

  useEffect(() => {
    // Call the calculateRates function and get the calculated values
    const { pro: newPro, kms: newKms, hour: newHour, hours: newHours, towTruck: newTowTruck } = calculateRates(a, b, l, h, w);

    // Set the state with the calculated values
    setPro(newPro);
    setKms(newKms);
    setHour(newHour);
    setHours(newHours);
    setTowTruck(newTowTruck);
  }, [a, b, l, h, w]);

  const nextBtn = () => {
    navigate("/ratesbrackdown");
  };

  return (
    <>
      <h1 className="tc">Rate</h1>
      <div className="out">
        <div className="container d-grid gap-2 col-6 mx-auto ">
          <span className="pro-span">Closest Provider</span> <p>{pro}</p> <hr/>
          <span>$/HR</span> <p>{hour}</p><hr/>
          <span>Total KM</span> <p>{kms}</p><hr/>
          <button onClick={nextBtn} className="btn">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
