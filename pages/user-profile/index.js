import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import UserProfile from "@/Components/Profile/UserProfile";
import axios from "axios";
import { useEffect } from "react";
// import apiClient from "@/data/apollo-client";
// import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebaseConfig";
export default function index() {
  const auth = getAuth(app);
  const [source, setSource] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [resState, setResState] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = sessionStorage.getItem("Token");
        const email = user?.email;

        const url = `/api/user-details`;

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
  return (
    <div>
      <NavBar />
      <div className='my-5'>
        <div className='text-center'>
          <h2 className='text-black mb-0 pb-0 '>Welcome To User Profile</h2>
        </div>
        <UserProfile data={resState} />
      </div>

      <Footer />
    </div>
  );
}
