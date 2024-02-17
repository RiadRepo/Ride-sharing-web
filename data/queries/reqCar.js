import { gql } from "@apollo/client";
const ADD_REQ_QUERY = gql`
mutation (
    $email: String, 
    $userName: String, 
    $fare:  Float, 
    $distance:  Float, 
    $destinationName: String,
    $sourceName: String,

   ) {
    createRequestContent(
        data: {
        email: {iv: $email}, 
        userName: {iv: $userName},
        fare: {iv: $fare},
        distance: {iv: $distance},
        destinationName:{iv: $destinationName}
        sourceName: {iv: $sourceName}
       
       
    }
      publish: true
      ) {
      id
      flatData {
        distance
        userName
        fare
        email
        destinationName
        sourceName
      }
    }
  }
`;
export default ADD_REQ_QUERY;