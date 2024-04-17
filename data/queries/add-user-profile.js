import { gql } from "@apollo/client";
const ADD_USER_QUERY = gql`
  mutation ($email: String, $userName: String) {
    createUsersContents(
      data: { email: { iv: $email }, userName: { iv: $userName } }
      publish: true
    ) {
      id
      flatData {
        userName
        email
      }
    }
  }
`;
export default ADD_USER_QUERY;
