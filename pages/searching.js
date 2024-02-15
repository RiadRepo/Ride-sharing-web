// searching.js
import NavBar from "@/Components/NavBar";

export default function searching() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img src='/image/uberconfirm.gif' alt='Loading...' />
      </div>
    </>
  );
}
