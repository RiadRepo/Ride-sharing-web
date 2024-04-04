import { gql } from "@apollo/client";
const GET_DRIVE_QUERY = gql`
query ($filter: String!) {
    queryDriverContents(filter: $filter) {
      id
      flatData {
        name
        email
      }
    }
  }
`;
export default GET_DRIVE_QUERY;
