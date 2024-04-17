export default function DriverDetails({ data }) {
  // console.log(data.data[0].flatData.email);
  return (
    <div>
      {data && data.data && data.data[0] && (
        <div className='border my-5 py-5'>
          <p>Name: {data.data[0].flatData?.name}</p>
          <p>Email: {data.data[0].flatData?.email}</p>
          <p>Vehicle Type: </p>
          <p>Model: </p>
          <p>License: </p>
          <p>Set My Location</p>
        </div>
      )}
    </div>
  );
}
