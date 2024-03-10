import Footer from "@/Components/Footer";
import DriveSection from "@/Components/Home/DriveSection";
import HeroSection from "@/Components/Home/HeroSection";
import NavBar from "@/Components/NavBar";
import { getAuth } from "firebase/auth";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebaseConfig";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let router = useRouter();

  const auth = getAuth(app);

  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/");
    }
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <DriveSection />
      <Footer />
    </>
  );
}
