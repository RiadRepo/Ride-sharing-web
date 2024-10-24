import { gql } from "@apollo/client";
const GET_DRIVE_QUERY = gql`
  query ($filter: String!) {
    queryDriverContents(filter: $filter) {
      id
      flatData {
        name
        email
        contactNumber
        myLocation
        isVerified
        license
        vehicle {
          vehicleType
          model
          number
        }
      }
    }
  }
`;
export default GET_DRIVE_QUERY;
