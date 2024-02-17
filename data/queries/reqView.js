import { gql } from "@apollo/client";
const REQ_VIEW_QUERY = gql`
query {
  queryRequestContents {
    id
    flatData {
      distance
      userName
      fare
      email
      sourceName
      destinationName
    }
  }
}
`;
export default REQ_VIEW_QUERY;
