import { authApiClient } from "@/data/apollo-client";
import { gql } from "@apollo/client";

export default async function handler(req, res) {
  const { distance, car, email, userName, source, destination, vehicleType } =
    req.body;
  const sourceName = `${source.label},${source.name} `;
  const destinationName = `${destination.label}, ${destination.name}`;

  const fare = parseFloat((car?.amount * distance).toFixed(2));

  const latitude = source.lat;
  const longitude = source.lng;

  const authClient = await authApiClient();
  const { data, errors } = await authClient.mutate({
    mutation: gql`
      mutation (
        $distance: Float
        $email: String
        $fare: Float
        $userName: String
        $sourceName: String
        $destinationName: String
        $vehicleType: String
       
      ) {
        createRequestContent(
          data: {
            distance: { iv: $distance }
            email: { iv: $email }
            fare: { iv: $fare }
            userName: { iv: $userName }
            sourceName: { iv: $sourceName }
            destinationName: { iv: $destinationName }
            vehicleType: { iv: $vehicleType }
             sources: {
                iv: { latitude: ${latitude}, longitude: ${longitude} }
              }
          }
          publish: true
        ) {
          id
          flatData {
            distance
            userName
            fare
            email
            destinationName
            isPending
            vehicleType
          }
        }
      }
    `,
    variables: {
      distance,
      email,
      fare,
      userName,
      sourceName,
      destinationName,
      vehicleType,
    },
  });

  if (!errors) {
    res.status(200).json({
      message: "Thank you for your response. Request has been added!",
      data: data?.createRequestContent,
    });
  } else {
    console.error(errors);
    res.status(400).json({
      message: "Something went wrong with the server!",
    });
  }
}
