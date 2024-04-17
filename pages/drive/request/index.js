// index.js
import DriveFooter from "@/Components/DriveFooter";
import DriveNavBar from "@/Components/DriveNavBar";
import CarRequest from "@/Components/Request/CarRequest";
import apiClient from "@/data/apollo-client";
import REQ_VIEW_QUERY from "@/data/queries/reqView";
import { useState } from "react";

export default function index({ data }) {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleCarRequestClick = (request) => {
    // Set the selected request when a CarRequest is clicked
    setSelectedRequest(request);
  };

  return (
    <div>
      <DriveNavBar />

      <div className='d-flex justify-content-center my-3'>
        <h1>Car Requests</h1>
      </div>
      <div className='mb-5'>
        {data.queryRequestContents.map((request, index) => (
          <CarRequest
            key={index}
            request={request}
            onClick={handleCarRequestClick}
          />
        ))}
      </div>

      <DriveFooter />
    </div>
  );
}

export async function getServerSideProps() {
  const { data, errors } = await apiClient().query({
    query: REQ_VIEW_QUERY,
    fetchPolicy: "no-cache",
  });

  if (errors) {
    console.error(errors);
    // Handle errors as needed
  } else {
    // console.log(data);
    // Process data
  }

  return { props: { data } };
}
