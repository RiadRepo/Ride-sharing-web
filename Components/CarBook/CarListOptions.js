import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { CarListData } from "@/utils/CarListData";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebaseConfig";
import CarListItem from "./CarListItem";
import Searching from "./Searching";

export default function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setSelectedCar] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [searchResult, setSearchResult] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);
  console.log(source, destination);
  const [user, loading] = useAuthState(auth);

  const handleRequest = async () => {
    try {
      if (!user) {
        console.error("User not authenticated.");
        return;
      }

      // Replace 'api/searching' with your actual API endpoint
      const response = await fetch("/api/searching", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          distance,
          source,
          destination,
          car: selectedCar,
          email: user.email,
          userName: user.displayName,
          vehicleType: "car",
          // Include the user's email
          // Add any additional data you want to send
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Redirect to the searching page
        // router.push("/searching");
        console.log(response.data);
        setSearchResult(response.data);
        setIsSearching(true);
      } else {
        console.error("Request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      {!isSearching && (
        <>
          <h2>Recommended</h2>
          {CarListData.map((items, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              className={` ${activeIndex === index ? "border border-3 " : ""}`}
              onClick={() => {
                setActiveIndex(index);
                setSelectedCar(items);
              }}
            >
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
        </>
      )}

      {/* Render the Searching component while searching is in progress */}
      {isSearching && <Searching searchData={searchResult} />}
    </div>
  );
}
