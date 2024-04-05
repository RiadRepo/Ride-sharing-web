import GET_DRIVE_QUERY from "@/data/queries/get-drive-profile";
import apiClient, { authApiClient } from "@/data/apollo-client";
import ADD_DRIVER_QUERY from "@/data/queries/add-drive-profile";


export default async function handler(req, res) {
    console.log(req.body)
    const name = req.body.userName
    const email = req.body.email
    const filter = `data/email/iv eq '${req.body.email}'`;
    const { data } = await apiClient().query({
        query: GET_DRIVE_QUERY,
        variables: {
            filter: filter,
        },
        fetchPolicy: "no-cache",
    });
    // if (data.queryDriverContents)
    console.log(data.queryDriverContents.length)
    if (data.queryDriverContents.length <= 0) {

        const authClient = await authApiClient();
        const { dataDrive, errors } = await authClient.mutate({
            mutation: ADD_DRIVER_QUERY,
            variables: {

                email,
                name,

            },
        });
        console.log(dataDrive)
        if (errors === undefined) {
            res.status(200).json({
                message: "Thank you for your response. driver has been added!",
                data: dataDrive?.queryDriverContents,
            });
        }
        else {
            if (errors === undefined) {
                res.status(200).json({
                    message: "Thank you for your response. Driver has been already added!",
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
}