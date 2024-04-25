// index.js
import DriveFooter from "@/Components/DriveFooter";
import DriveNavBar from "@/Components/DriveNavBar";
import CarRequest from "@/Components/Request/CarRequest";
import apiClient from "@/data/apollo-client";
import REQ_VIEW_QUERY from "@/data/queries/reqView";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../../firebaseConfig";

export default function index({ data }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const auth = getAuth(app);
  const [source, setSource] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [resState, setResState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = sessionStorage.getItem("Token");
        const email = user?.email;

        const url = `/api/ride-request`;

        const response = await axios.post(url, { email });
        console.log(response);
        if (response.status === 200) {
          setResState(response.data);
        }
        if (!response?.data?.companyUser) router.push("/driver-login");
        // if (token) {
        //   router.push("/");
        // }
        // if (!token) {
        //   router.push("/login");
        // }
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);

  const handleCarRequestClick = (request) => {
    // Set the selected request when a CarRequest is clicked
    setSelectedRequest(request);
  };

  return (
    <div>
      <DriveNavBar />

      <div className='d-flex justify-content-center my-3'>
        <h1>Requests</h1>
      </div>
      <div className='mb-5' style={{ minHeight: "400px" }}>
        {resState.length === 0 ? (
          <p className="text-center mb-5 pb-5">You don't have any request.</p>
        ) : (
          resState.map((request, index) => (
            <CarRequest
              key={index}
              request={request}
              onClick={handleCarRequestClick}
            />
          ))
        )}
      </div>

      <DriveFooter />
    </div>
  );

}

