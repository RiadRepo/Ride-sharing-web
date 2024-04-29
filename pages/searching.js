// searching.js
import NavBar from "@/Components/NavBar";
import Image from "next/image";

export default function searching() {

  


  const handleRefresh = () => {
    // Reload the page
    window.location.reload();
  };
  return (
    <>
      <NavBar />
      <div className='text-center'>
        <h1>Searching</h1>
        <button onClick={handleRefresh}>Refresh</button>
      </div>

      <div
        className='container '
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // height: "100vh",
        }}
      >
        {/* <div>
          <h1>Searching</h1>
        </div>
        <div>
       
        </div> */}
        <Image
          src='/image/car-search.gif'
          alt='Loading...'
          layout='responsive'
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
