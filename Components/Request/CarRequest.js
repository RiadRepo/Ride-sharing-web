import { useState } from "react";

export default function CarRequest({ request }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  console.log("checking", request);
  const handleRequestClick = (request) => {
    // Set the selected request when clicked
    setSelectedRequest(request);
  };

  //   console.log(repo.items[0].data);
  return (
    <div>
      <ul>
        <li onClick={() => handleRequestClick(request.id)}>
          <p>Name: {request.data.userName?.iv}</p>
          <p>Fare: {request.data.fare?.iv} Tk</p>
          <p>Distance: {request.data.distance?.iv}</p>
        </li>
      </ul>
    </div>
  );
}
