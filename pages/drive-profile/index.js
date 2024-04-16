import DriveProfile from "@/Components/DriveProfile/DriveProfile";
import axios from "axios";
import { useEffect } from "react";
// import apiClient from "@/data/apollo-client";
// import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";
import DriveFooter from "@/Components/DriveFooter";
import DriveNavBar from "@/Components/DriveNavBar";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebaseConfig";

export default function index() {
  const auth = getAuth(app);

  const [user, loading] = useAuthState(auth);
  const [resState, setResState] = useState({});
  console.log(user?.email);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = sessionStorage.getItem("Token");
        const email = user?.email;

        const url = `/api/driver-details`;

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
  console.log(resState);
  let register = "driver";
  //   useEffect(async () => {
  //     const getMail = await getSession();
  //     const email = getMail?.email;
  //     const url = `/api/get_user_data_by_email`;
  //     const response = await axios.post(url, { email });
  //     if (response.status === 200) {
  //       setResState(response);
  //     }

  //     if (!response?.data?.companyUser) router.push("/users/~");
  //   }, []);

  console.log("test", resState);

  return (
    <div>
      <DriveNavBar />
      <DriveProfile data={resState} />
      <DriveFooter />
    </div>
  );
}

// export async function getServerSideProps() {
//   const { data, errors } = await apiClient().query({
//     query: GET_DRIVE_QUERY,
//     variables: {
//       filter: filter,
//     },
//     fetchPolicy: "no-cache",
//   });

//   if (errors) {
//     console.error(errors);
//     // Handle errors as needed
//   } else {
//     // console.log(data);
//     // Process data
//   }

//   return { props: { data } };
// }
