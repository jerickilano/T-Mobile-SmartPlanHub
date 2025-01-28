// function planFinder() {
//     return (
//         <div>
//         <h1>Find Your Perfect Plan</h1>
//         <p>Use this page to explore all available mobile plans.</p>
//       </div>
//     );
//   }
  
// export default planFinder;

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

function PlanFinder() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const planCollection = collection(db, "plans");
      const planSnapshot = await getDocs(planCollection);
      const planList = planSnapshot.docs.map((doc) => doc.data());
      setPlans(planList);
    };

    fetchPlans();
  }, []);

  return (
    <div>
      <h1>Find Your Perfect Plan</h1>
      <div>
        {plans.map((plan) => (
          <div key={plan.id}>
            <h2>{plan.name}</h2>
            <p>Data: {plan.data}</p>
            <p>Cost: ${plan.cost}/month</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanFinder;
