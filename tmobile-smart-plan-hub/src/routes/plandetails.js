import React from "react";
import { useParams } from "react-router-dom";

function PlanDetails() {
  const { id } = useParams(); // Get the plan ID from the route
  return (
    <div>
      <h1>Plan Details</h1>
      <p>Details for Plan ID: {id}</p>
    </div>
  );
}

export default PlanDetails;
