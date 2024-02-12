import { CarListData } from "@/utils/CarListData";
import CarListItem from "./CarListItem";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebaseConfig";

export default function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setSelectedCar] = useState([]);
  const router = useRouter();
  const auth = getAuth(app);

  const [user, loading] = useAuthState(auth);


  const handleRequest = async () => {
    try {
      if (!user) {
        console.error('User not authenticated.');
        return;
      }

      // Replace 'api/searching' with your actual API endpoint
      const response = await fetch('/api/searching', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          distance,
          car: selectedCar,
          email: user.email,
          userName: user.displayName,
          // Include the user's email
          // Add any additional data you want to send
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Redirect to the searching page
        router.push('/searching');
      } else {
        console.error('Request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  return (
    <div>
      <h2>Recommended</h2>
      {CarListData.map((items, index) => (
        <div
          key={index}
          className={` ${activeIndex === index ? 'border border-3' : ''}`}
          onClick={() => { setActiveIndex(index); setSelectedCar(items) }}>
          <CarListItem car={items} distance={distance} />
        </div>
      ))}
      {selectedCar?.name ? (
        <div className='d-flex justify-content-between bg-white p-3 shadow-xl rounded-lg w-full border-1 align-items-center'>
          <h2>Make Payment For</h2>
          <button
            className='p-3 bg-black text-white rounded-lg text-center'
            onClick={handleRequest}
          >
            Request {selectedCar.name}
          </button>
        </div>
      ) : null}
    </div>
  );

}
