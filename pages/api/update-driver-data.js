// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authApiClient } from "@/data/apollo-client";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  console.log(req.body);
  const { ids, source, formData } = req.body;

  let name = formData.name;
  let license = formData.license;
  const contactNumber = formData.contactNumber;
  let vehicle = [
    {
      vehicleType: formData.vehicleType,
      model: formData.model,
      number: formData.number,
      level: "after verified Approved",
    },
  ];
  // let myLocation = { iv: { latitude: 21.8714189, longitude: 90.87141892 } }; // Define myLocation as a JSON object
  const latitude = source.lat;
  const longitude = source.lng;

  console.log(ids, name, license, vehicle);

  try {
    const authClient = await authApiClient();
    const { dataDrive, errors } = await authClient.mutate({
      mutation: gql`
        mutation (
          $ids: String
          $name: String
          $license: String
          $contactNumber: String
          $vehicle: [DriverDataVehicleChildInputDto!]
        ) {
          patchDriverContent(
            id: $ids
            data: {
              name: { iv: $name }
              contactNumber: { iv: $contactNumber }
              license: { iv: $license }
              vehicle: { iv: $vehicle }
              myLocation: {
                iv: { latitude: ${latitude}, longitude: ${longitude} }
              }
            }
            expectedVersion: -2
          ) {
            id
            flatData {
              name
              email
              license
              contactNumber
              myLocation
              isVerified
              vehicle {
                vehicleType
              }
            }
          }
        }
      `,
      variables: {
        ids,
        name,
        license,
        vehicle,
        contactNumber,
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
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}
