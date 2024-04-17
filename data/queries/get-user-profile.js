import { gql } from "@apollo/client";
const GET_USER_QUERY = gql`
  query ($filter: String!) {
    queryUsersContents(filter: $filter) {
      id
      flatData {
        userName
        email
      }
    }
  }
`;
export default GET_USER_QUERY;
