import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function DriverDetails({ data, onSave }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("/api/update-driver-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      onSave(formData); // Assuming onSave function updates the UI with the new data
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          defaultValue={data?.data?.[0]?.flatData?.name || ""}
          {...register("name", { required: true })}
        />
        {errors.name && <p className='text-danger'>Name is required</p>}
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          defaultValue={data?.data?.[0]?.flatData?.email || ""}
          {...register("email", { required: true })}
        />
        {errors.email && <p className='text-danger'>Email is required</p>}
      </Form.Group>

      <Form.Label>Vehicle Type</Form.Label>
      <Form.Select
        style={{ maxWidth: "500px", height: "40px" }}
        {...register("vehicleType", {
          required: true,
        })}
        defaultValue={data?.flatData?.vehicleType || ""}
      >
        <option value='' disabled>
          Choose vehicle type
        </option>
        <option value='Car'>Car</option>
        <option value='Bike'>Bike</option>
        <option value='Ambulance'>Ambulance</option>
        <option value='CNG'>CNG</option>
      </Form.Select>
      {errors?.vehicleType && (
        <p style={{ color: "red" }}>Please select a vehicle type.</p>
      )}

      <Form.Group controlId='model'>
        <Form.Label>Model</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter model'
          defaultValue={data?.model || ""}
          {...register("model")}
        />
      </Form.Group>

      <Form.Group controlId='license'>
        <Form.Label>License</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter license'
          defaultValue={data?.license || ""}
          {...register("license")}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Save
      </Button>
    </Form>
  );
}
