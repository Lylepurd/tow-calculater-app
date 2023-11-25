import React from "react";

export const calculateRates = (a, b, l, h, w) => {
  let newTowTruck = "";
  if (w < 10 && l <= 7) {
    newTowTruck = "Tilt Tray";
  } else if (w > 10 && l > 7 && h > 3.4) {
    newTowTruck = "Under Hook";
  } else if (w > 10 && l > 7 && h <= 3.4) {
    newTowTruck = "Super Tilt";
  } else {
    newTowTruck = "unknown";
  }

  let newPro = "";
  let newKms = "";
  let newHour = "";
  let newHours = "";
  let newCost = "";

  switch (a) {
    case "Caboolture Hospital":
      if (b === "Brisbane Isuzu") {
        newPro = "Clayton's";
        newKms = "24.7km";
        newHour = "$250";
        newHours = "1.32hr";
        newCost = "$383.33";
      }
      break;
    case "Merri Concourse":
      if (b === "Australis Dr") {
        newPro = "Modern Towing";
        newKms = "70.8kms";
        newHour = "$400";
        newHours = "2.1hr";
        newCost = "$866.68";
      }
      break;
    case "Taylor Rd":
      if (b === "Sci-Fleet Hino") {
        newPro = "Barnes Towing";
        newKms = "72.5kms";
        newHour = "$320";
        newHours = "2.25hr";
        newCost = "$772.67";
      }
      break;
    default:
      newPro = "unknown";
      newKms = "unknown";
      newHour = "unknown";
      newHours = "unknown";
      newCost = "unknown";
      newTowTruck = "unknown";
      break;
  }

  // Return an object with the calculated values
  return {
    pro: newPro,
    kms: newKms,
    hour: newHour,
    hours: newHours,
    towTruck: newTowTruck,
    cost: newCost
  };
};