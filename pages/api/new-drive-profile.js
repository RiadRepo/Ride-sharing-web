import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";
import apiClient from "@/data/apollo-client";


export default async function handler(req, res) {
    console.log(req.body)
    const filter = `data/email/iv eq '${req.body.email}'`;
    const { data, errors } = await apiClient().query({
        query: GET_DRIVE_QUERY,
        variables: {
            filter: filter,
        },
        fetchPolicy: "no-cache",
    });
    // if (data.queryDriverContents)
    console.log(data.queryDriverContents.length)
    if (data.queryDriverContents.length > 0) {



    }
    else {
        if (errors === undefined) {
            res.status(200).json({
                message: "Thank you for your response. Company has been added!",
                data: data?.queryDriverContents,
            });
        } else
            res.status(400).json({
                message: "Something went wrong with the server!",
            });
    }
    // if (errors === undefined) {
    //     res.status(200).json({
    //         message: "Thank you for your response. Company has been added!",
    //         data: data?.createRequestContent,
    //     });
    // } else
    //     res.status(400).json({
    //         message: "Something went wrong with the server!",
    //     });
}
