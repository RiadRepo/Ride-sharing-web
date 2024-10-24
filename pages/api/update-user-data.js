// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authApiClient } from "@/data/apollo-client";
import UPDATE_USER_QUERY from "@/data/queries/update-user";

export default async function handler(req, res) {
  console.log(req.body);
  const { ids, formData } = req.body;
  let userName = formData.name;

  const contactNumber = formData.contactNumber;

  console.log(ids, userName, contactNumber);

  try {
    const authClient = await authApiClient();
    const { dataDrive, errors } = await authClient.mutate({
      mutation: UPDATE_USER_QUERY,
      variables: {
        ids,
        userName,
        contactNumber,
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
