import { gql } from "@apollo/client";
const UPDATE_REQ_QUERY = gql`
  mutation ($id: String, $isPending: Boolean ,$isFinish: Boolean) {
    patchRequestContent(
      id: $id
      data: { isPending: { iv: $isPending }  isFinish: { iv: $isFinish } }
      expectedVersion: -2
    ) {
      id
      flatData {
        isPending
         isFinish
      }
    }
  }
`;
export default UPDATE_REQ_QUERY;
