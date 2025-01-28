// function StoreFinder() {
//     return (
//       <div>
//         <h1>Find Your Nearest Store</h1>
//         <p>Locate the closest T-Mobile store to finalize your plan selection.</p>
//       </div>
//     );
//   }
  
// export default StoreFinder;

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { useState, useEffect } from "react";

function StoreFinder() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const storeCollection = collection(db, "stores");
      const storeSnapshot = await getDocs(storeCollection);
      const storeList = storeSnapshot.docs.map((doc) => doc.data());
      setStores(storeList);
    };

    fetchStores();
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 47.608013, lng: -122.335167 }}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={{ lat: store.coordinates.lat, lng: store.coordinates.lng }}
        />
      ))}
    </GoogleMap>
  );
}

export default StoreFinder;