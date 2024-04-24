import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Drive from "../Drive/Drive";
import DriverDetails from "./DriverDetails";
export default function DriveProfile({ data }) {
  console.log(data?.data?.[0].flatData?.isVerified);

  const [driverMode, setDriverMode] = useState(() => {
    // Get the initial value from local storage or default to false
    const storedValue = localStorage.getItem("driverMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const handleToggleDetails = () => {
    setDriverMode((prevMode) => {
      const newMode = !prevMode;
      // Store the new value in local storage
      localStorage.setItem("driverMode", JSON.stringify(newMode));
      return newMode;
    });
  };
  return (
    <div className='bg-white '>
      <Container>
        <div>
          <div className='text-center'>
            <h2 className='text-black mb-0 pb-0 '>Welcome To Drive Profile</h2>
            {data?.data?.[0].flatData?.isVerified === false ||
            data?.data?.[0].flatData?.isVerified === null ? (
              <p className='text-danger'>(Your profile is not verified)</p>
            ) : null}
          </div>

          {data?.data?.[0].flatData?.isVerified == true ?? (
            <Form.Check
              type='switch'
              id='toggle-details'
              label='Driver Mode'
              checked={driverMode}
              onChange={handleToggleDetails}
            />
          )}

          <DriverDetails data={data}></DriverDetails>
          <Drive />
        </div>
      </Container>
    </div>
  );
}
