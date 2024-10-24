import apiClient, { authApiClient } from "@/data/apollo-client";
import ADD_DRIVER_QUERY from "@/data/queries/add-drive-profile";
import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";

export default async function handler(req, res) {
  console.log(req.body);
  const name = req.body.userName;
  const email = req.body.email;
  const filter = `data/email/iv eq '${req.body.email}'`;

  try {
    const { data } = await apiClient().query({
      query: GET_DRIVE_QUERY,
      variables: {
        filter: filter,
      },
      fetchPolicy: "no-cache",
    });

    console.log(data.queryDriverContents.length);

    if (data.queryDriverContents.length <= 0) {
      const authClient = await authApiClient();
      const { dataDrive, errors } = await authClient.mutate({
        mutation: ADD_DRIVER_QUERY,
        variables: {
          email,
          name,
        },
      });

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
    } else {
      res.status(200).json({
        message: "Thank you for your response. Driver has been already added!",
        data: data?.queryDriverContents,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}
