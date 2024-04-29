import apiClient from "@/data/apollo-client";
import GET_USER_QUERY from "@/data/queries/get-user-profile";

export default async function handler(req, res) {
  const email = req.body.email;
  const filter = `data/email/iv eq '${email}'`;
  const { data } = await apiClient().query({
    query: GET_USER_QUERY,
    variables: {
      filter: filter,
    },
    fetchPolicy: "no-cache",
  });
  console.log(data);
  if (data.queryUsersContents.length > 0) {
    res.status(200).json({
      message: "Thank you for your response.",
      data: data?.queryUsersContents,
    });
  } else {
    res.status(400).json({
      message: "something wrong in backend",
    });
  }
}
