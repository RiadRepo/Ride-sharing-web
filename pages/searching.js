// searching.js
import NavBar from "@/Components/NavBar";
import Image from "next/image";

export default function searching() {
  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Image src='/image/uberconfirm.gif' alt='Loading...' layout="responsive" width={100} height={100} />
      </div>
    </>
  );
}
