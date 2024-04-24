import { gql } from "@apollo/client";
const GET_DRIVE_QUERY = gql`
  query ($filter: String!) {
    queryDriverContents(filter: $filter) {
      id
      flatData {
        name
        email
        myLocation
        isVerified
        vehicle {
          vehicleType
        }
      }
    }
  }
`;
export default GET_DRIVE_QUERY;
