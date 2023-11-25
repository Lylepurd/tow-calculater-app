import React from "react";
import { useNavigate } from "react-router-dom";



export default function TruckDetails() {

  const navigate = useNavigate();

  const nextForm = () => {
    localStorage.setItem("weight", document.getElementsByName("weight")[0].value);
    localStorage.setItem("height", document.getElementsByName("height")[0].value);
    localStorage.setItem("length", document.getElementsByName("length")[0].value);
    navigate('/rate');
  };

  return(
    <>
      <h1 className="tc">Truck Details</h1>
        <div className="out">
          <div className="container tc wrapper ba b--solid bw3 flex flex-column items-center justify-center">
            <form  onSubmit={nextForm} className="tc loc-form flex flex-column">
              <span>Weight</span> <input name="weight" type="number" step='0.01'/>
              <span className="sp2">Height</span> <input name="height" type="number" step='0.01'/>
              <span className="sp2">Length</span> <input name="length" type="number" step='0.01'/>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </>
  )
}