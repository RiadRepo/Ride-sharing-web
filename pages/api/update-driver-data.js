// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authApiClient } from "@/data/apollo-client";
import UPDATE_DRIVER_QUERY from "@/data/queries/update-driver";

export default async function handler(req, res) {
  console.log(req.body);
  const { ids, source, formData } = req.body;
  let name = formData.name;
  let email = formData.email;
  let license = formData.license;
  let vehicle = [
    {
      vehicleType: formData.vehicleType,
      model: formData.model,
      number: formData.number,
      level: "after verified Approved",
    },
  ];

  // let myLocation = {
  //   latitude: 22.3752075,
  //   longitude: 91.8348606,
  // };

  try {
    const authClient = await authApiClient();
    const { dataDrive, errors } = await authClient.mutate({
      mutation: UPDATE_DRIVER_QUERY,
      variables: {
        ids,
        email,
        name,
        license,
        vehicle,
        // myLocation,
      },
    });
    console.log(dataDrive);
    if (errors) {
      res.status(400).json({
        message: "Something went wrong with the server!",
      });
      return;
    }

    console.log("testing data", dataDrive);
    res.status(200).json({
      message: "Thank you for your response. driver has been added!",
      data: dataDrive?.queryDriverContents,
    });
    // } else {
    //   res.status(200).json({
    //     message: "Thank you for your response. Driver has been already added!",
    //     data: data?.queryDriverContents,
    //   });
    // }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
  res.status(200).json({ name: "John Doe" });
}
