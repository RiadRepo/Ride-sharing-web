import { gql } from "@apollo/client";
const ADD_REQ_QUERY = gql`
  mutation (
    $email: String
    $userName: String
    $fare: Float
    $distance: Float
    $destinationName: String
    $sourceName: String
    $vehicleType: String
    $sources: JsonScalar
  ) {
    createRequestContent(
      data: {
        email: { iv: $email }
        userName: { iv: $userName }
        fare: { iv: $fare }
        distance: { iv: $distance }
        destinationName: { iv: $destinationName }
        sourceName: { iv: $sourceName }
        vehicleType: { iv: $vehicleType }
        sources: { iv: $sources }
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
        vehicleType
        
      }
    }
  }
`;
export default ADD_REQ_QUERY;
