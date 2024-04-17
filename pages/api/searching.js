import { authApiClient } from "@/data/apollo-client";
import ADD_REQ_QUERY from "@/data/queries/reqCar";

export default async function handler(req, res) {
  const { distance, car, email, userName, source, destination, vehicleType } =
    req.body;
  const sourceName = `${source.label},${source.name} `;
  const destinationName = `${destination.label}, ${destination.name}`;
  console.log(destinationName, sourceName);
  const fare = parseFloat((car?.amount * distance).toFixed(2));

  const authClient = await authApiClient();
  const { data, errors } = await authClient.mutate({
    mutation: ADD_REQ_QUERY,
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

  // // res.status(200).json(data?.createProductContent);
  if (errors === undefined) {
    res.status(200).json({
      message: "Thank you for your response. Company has been added!",
      data: data?.createRequestContent,
    });
  } else
    res.status(400).json({
      message: "Something went wrong with the server!",
    });
}
