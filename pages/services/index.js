import NavBar from "@/Components/NavBar";
import Services from "@/Components/Services/Services";
import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { LoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import axios from "axios"; // Import axios
import app from "../../firebaseConfig";

export default function Index() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  const [resState, setResState] = useState({});
  const router = useRouter();

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        let token = sessionStorage.getItem("Token");
        console.log("User token:", user);

        const email = user?.email;
        const url = `/api/ride-check-data`;

        try {
          const response = await axios.post(url, { email });
          console.log(response.data.data.leangth > 0);


          if (response.status === 200 && response.data.data.length > 0) {
            setResState(response.data);
            router.push("/riding-mode");

          }
        } catch (err) {
          console.error("Error fetching ride-check-data:", err);
        }
      } else {
        // No user or session token, redirect to login page
        router.push("/login");
      }
    };

    if (!loading) {
      fetchData();
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>Loading...</p>; // You can customize this loader
  }

  if (error) {
    console.error("Authentication error:", error);
    return <p>Authentication error occurred</p>; // Handle the error case if needed
  }

  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <LoadScript
          libraries={["places"]}
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        >
          <div>
            <NavBar />
            <Services />
          </div>
        </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
