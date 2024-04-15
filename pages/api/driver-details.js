// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import apiClient from "@/data/apollo-client";
import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";

export default async function handler(req, res) {
  console.log("test req", req.body);
  const email = req.body.email;
  const filter = `data/email/iv eq '${email}'`;
  const { data } = await apiClient().query({
    query: GET_DRIVE_QUERY,
    variables: {
      filter: filter,
    },
    fetchPolicy: "no-cache",
  });
  console.log(data);
  if (data.queryDriverContents.length > 0) {
    res.status(200).json({
      message: "Thank you for your response.",
      data: data?.queryDriverContents,
    });
  } else {
    res.status(400).json({
      message: "something wrong in backend",
    });
  }
}
