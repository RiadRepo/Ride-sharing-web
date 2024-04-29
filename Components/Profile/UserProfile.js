import { Button, Container, Form } from "react-bootstrap";
// import MyLoaction from "../Googlemap/MyLoaction";
import { useForm } from "react-hook-form";
export default function UserProfile({ data }) {
  console.log(data?.data?.[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (formData) => {
    let driverData = {
      ids: data?.data?.[0]?.id,
      formData: formData,
    };

    try {
      const response = await fetch("/api/update-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(driverData),
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
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='userName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            defaultValue={data?.data?.[0]?.flatData?.userName || ""}
            {...register("userName", { required: true })}
          />
          {errors.userName && <p className='text-danger'>Name is required</p>}
        </Form.Group>

        <Form.Group controlId='contactNumber'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Your Contact Number'
            defaultValue={data?.data?.[0]?.flatData?.contactNumber || ""}
            {...register("contactNumber", { required: true })}
          />
          {errors.contactNumber && (
            <p className='text-danger'>Contact is required</p>
          )}
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            defaultValue={data?.data?.[0]?.flatData?.email}
            {...register("email")}
            readOnly
            disabled
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Save
        </Button>
      </Form>
    </Container>
  );
}
