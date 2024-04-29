import { gql } from "@apollo/client";
const UPDATE_DRIVER_QUERY = gql`
  mutation ($ids: String, $IsPending: Boolean) {
    patchRequestContent(
      id: $ids
      data: { IsPending: { iv: $IsPending } }
      expectedVersion: -2
    ) {
      id
      flatData {
        IsPending
      }
    }
  }
`;
export default UPDATE_DRIVER_QUERY;
