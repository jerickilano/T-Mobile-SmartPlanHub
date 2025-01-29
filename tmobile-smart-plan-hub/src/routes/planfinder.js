// function PlanFinder() {
//     return (
//         <div>
//         <h1>Find Your Perfect Plan</h1>
//         <p>Use this page to explore all available mobile plans.</p>
//       </div>
//     );
//   }
  
// export default PlanFinder;

import { useEffect, useState } from 'react';
// import react to create a React component
  // useState: react hook to store and update state (list of plans)
  // useEffect: hook to run side effects (fetching data when component loads)

import { collection, getDocs } from "firebase/firestore";
// collection/getDocs are firebase firestore functions
  // collection(db, "plans") : gets a reference to plans
  // getDocs(collectionRef) : fetches all documents from that collection

import { db } from "./firebase-config";
// import the firebase database instance

// function to return UI elements
function PlanFinder() {
  const [plans, setPlans] = useState([]); 
  // declares state variable named "plans"
  // useState() initializes empty array, meaning when the page loads-the plan is initially empty
  // setPlans: function that updates plans when we fetch data

  useEffect (() => {
    const fetchPlans = async () => { // function will run asynchronously
      try {
        //console.log("Fetching plans from Firestore...");
        const planCollection = collection(db, "plans"); 
        const planSnapshot = await getDocs(planCollection); 
        const planList = planSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("Fetched plans:", planList);
        setPlans(planList); 
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans(); 
  }, []);

  return (
    <div>
      <h1>Find Your Perfect Plan</h1>
      <div>
      {/* <pre>{JSON.stringify(plans, null, 2)}</pre> (DEBUGGING)*/}
        {plans.map((plan) => (
          <div key={plan.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h2>{plan.name}</h2>
            <p>Data: {plan.data}</p>
            <p>Minutes: {plan.minutes}</p>
            <p>Cost: ${plan.cost}/month</p>
            <p>Features: {plan.features.join(", ")}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanFinder;