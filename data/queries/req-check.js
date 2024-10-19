import { gql } from "@apollo/client";
const REQ_CHECK_QUERY = gql`
  query ($filter: String!) {
    queryRequestContents(filter: $filter) {
      id
      flatData {
        distance
        userName
        fare
        email
        sourceName
        destinationName
        vehicleType
      }
    }
  }
`;
export default REQ_CHECK_QUERY;
