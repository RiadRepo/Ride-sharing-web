import { gql } from "@apollo/client";
const UPDATE_REQ_QUERY = gql`
  mutation ($id: String, $isPending: Boolean) {
    patchRequestContent(
      id: $id
      data: { isPending: { iv: $isPending } }
      expectedVersion: -2
    ) {
      id
      flatData {
        isPending
      }
    }
  }
`;
export default UPDATE_REQ_QUERY;
