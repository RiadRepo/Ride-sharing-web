import { gql } from "@apollo/client";
const UPDATE_USER_QUERY = gql`
  mutation (
    $ids: String
   
    $userName: String
    $contactNumber: String
  ) {
    patchUsersContent(
      id: $ids
      data: {
      
        userName: { iv: $userName }
        contactNumber: { iv: $contactNumber }
      }
      expectedVersion: -2
    ) {
      id
      flatData {
        userName
        email
        contactNumber
      }
    }
  }
`;
export default UPDATE_USER_QUERY;
