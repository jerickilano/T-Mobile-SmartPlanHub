import { useParams } from "react-router-dom";

function planDetails() {
  const { id } = useParams(); // Get the plan ID from the route
  return (
    <div>
      <h1>Plan Details</h1>
      <p>Details for Plan ID: {id}</p>
    </div>
  );
}

export default planDetails;
