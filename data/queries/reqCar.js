import { gql } from "@apollo/client";
const ADD_REQ_QUERY = gql`
mutation (
    $email: String, 
    $userName: String, 
    $fare:  Float, 
    $distance:  Float, 

   ) {
    createRequestContent(
        data: {
        email: {iv: $email}, 
        userName: {iv: $userName},
        fare: {iv: $fare},
        distance: {iv: $distance},
       
       
    }
      publish: true
      ) {
      id
      flatData {
        distance
        userName
        fare
        email
      
      }
    }
  }
`;
export default ADD_REQ_QUERY;