import { gql } from "@apollo/client";
const ADD_DRIVER_QUERY = gql`
mutation (
    $email: String, 
    $name: String, 


   ) {
    createDriverContent(
        data: {
        email: {iv: $email}, 
        name: {iv: $name},
       
       
    }
      publish: true
      ) {
      id
      flatData {
       
        name
        email
        
      }
    }
  }
`;
export default ADD_DRIVER_QUERY;