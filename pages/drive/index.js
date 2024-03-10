import Drive from "@/Components/Drive/Drive";
import NavBar from "@/Components/NavBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebaseConfig";
import { getAuth } from "firebase/auth";
import DriveHeroSection from "@/Components/Drive/DriveHeroSection";
import WhyDriverWithRideShare from "@/Components/Drive/WhyDriverWithRideShare";
import Footer from "@/Components/Footer";


export default function index() {
  // let router = useRouter();

  // const auth = getAuth(app);

  // const [user, loading] = useAuthState(auth);
  // useEffect(() => {
  //   let token = sessionStorage.getItem("Token");

  //   // if (token) {
  //   //   router.push("/");
  //   // }
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, []);
  return (
    <div>
      <NavBar />
      <DriveHeroSection />
      <WhyDriverWithRideShare />
      {/* <Drive /> */}
      <Footer />
    </div>
  );
}
