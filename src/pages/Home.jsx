import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return(
    <div className="mydiv1">
      <h1 className="tc head">Tow Calculator</h1>
      <Link className="start-btn" to={'/locations'}>Begin</Link>
    </div>
  )
}