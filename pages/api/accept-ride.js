// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authApiClient } from "@/data/apollo-client";
import UPDATE_REQ_QUERY from "@/data/queries/update-request";

export default async function handler(req, res) {
  console.log(req.body);
  const { id, isPending } = req.body;
  //   let userName = formData.name;

  console.log(id, isPending);

  try {
    const authClient = await authApiClient();
    const { dataDrive, errors } = await authClient.mutate({
      mutation: UPDATE_REQ_QUERY,
      variables: {
        id,
        isPending,

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
      data: dataDrive?.queryRequestContents,
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
