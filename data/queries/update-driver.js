import { gql } from "@apollo/client";
const UPDATE_DRIVER_QUERY = gql`
  mutation (
    $ids: String
    $name: String
    $license: String
    $contactNumber: String
    
    $vehicle: [DriverDataVehicleChildInputDto!]
  ) {
    patchDriverContent(
      id: $ids
      data: {
        name: { iv: $name }
        contactNumber: { iv: $contactNumber }
        license: { iv: $license }
        vehicle: { iv: $vehicle }
        
      }
      expectedVersion: -2
    ) {
      id
      flatData {
        name
        email
        license
        contactNumber
        myLocation
        isVerified
        vehicle {
          vehicleType
        }
      }
    }
  }
`;
export default UPDATE_DRIVER_QUERY;
