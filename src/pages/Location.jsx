import React from "react";
import { useNavigate } from "react-router-dom";



export default function Location() {

  const navigate = useNavigate();

  const nextForm = () => {
    localStorage.setItem("pickup", document.getElementsByName("pickup")[0].value);
    localStorage.setItem("dropoff", document.getElementsByName("dropoff")[0].value);
    navigate('/truckdetails');
  };
  


  return(
    <>
      <h1 className="tc">Location</h1>
      <div className="out">
        <div className="container tc wrapper ba b--solid bw3 flex flex-column items-center justify-center">
          <form onSubmit={nextForm} className="tc loc-form flex flex-column">
            <span>Breakdown Location:</span> <input name="pickup" type="text" placeholder="Location" />
            <span className="sp1">Drop Off Location:</span> <input name="dropoff" type="text" placeholder="Location" />
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}