import NavBar from "@/Components/NavBar";
import Services from "@/Components/Services/Services";
import { useState } from "react";
import { SourceContext } from "@/context/SourceContext";
import { DestinationContext } from "@/context/DestinationContext";
import { useContext } from "react";

export default function index() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <div>
          <NavBar />
          <Services />
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
