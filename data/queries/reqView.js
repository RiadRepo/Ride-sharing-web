import { gql } from "@apollo/client";
const REQ_VIEW_QUERY = gql`
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
export default REQ_VIEW_QUERY;
