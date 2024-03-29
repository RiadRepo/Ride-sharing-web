import NavBar from "@/Components/NavBar";
import Services from "@/Components/Services/Services";
import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebaseConfig";
import AmbulanceBook from "@/Components/AmbulanceBook/AmbulanceBook";
export default function index() {
    const [source, setSource] = useState([]);
    const [destination, setDestination] = useState([]);
    let router = useRouter();

    const auth = getAuth(app);

    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        let token = sessionStorage.getItem("Token");

        // if (token) {
        //   router.push("/");
        // }
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (
        <SourceContext.Provider value={{ source, setSource }}>
            <DestinationContext.Provider value={{ destination, setDestination }}>
                <LoadScript
                    libraries={["places"]}
                    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                >
                    <div>
                        <NavBar />
                        <AmbulanceBook />
                    </div>
                </LoadScript>
            </DestinationContext.Provider>
        </SourceContext.Provider>
    );
}
