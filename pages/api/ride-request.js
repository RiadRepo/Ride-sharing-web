import apiClient from "@/data/apollo-client";
import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";
import REQ_VIEW_QUERY from "@/data/queries/reqView";

export default async function handler(req, res) {
  console.log("test request", req.body);
  const email = req.body.email;
  const filter = `data/email/iv eq '${email}'`;
  const { data } = await apiClient().query({
    query: GET_DRIVE_QUERY,
    variables: {
      filter: filter,
    },
    fetchPolicy: "no-cache",
  });
  console.log(
    "checking mail",
    data?.queryDriverContents[0]?.flatData.vehicle[0].vehicleType
  );
  if (data?.queryDriverContents[0]?.flatData?.myLocation?.latitude) {
    const Filter = `geo.distance(data/sources/iv, geography'POINT(${data?.queryDriverContents[0]?.flatData?.myLocation?.longitude} ${data?.queryDriverContents[0]?.flatData?.myLocation?.latitude})') lt 5000 and data/vehicleType/iv eq '${data?.queryDriverContents[0]?.flatData.vehicle[0].vehicleType}' and data/isPending/iv eq false`;
    console.log(Filter);
    const { data: value, errors } = await apiClient().query({
      query: REQ_VIEW_QUERY,
      variables: {
        filter: Filter,
      },
      fetchPolicy: "no-cache",
    });
    console.log("test req", value);
    if (value.queryRequestContents.length > 0) {
      res.status(200).json({
        message: "Thank you for your response.",
        data: value?.queryRequestContents,
      });
    } else {
      res.status(201).json({
        message: "You Don't Have Any Request",
      });
    }
  } else {
    res.status(400).json({
      message: "something wrong in backend",
    });
  }
}
