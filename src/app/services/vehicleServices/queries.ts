import gql from "graphql-tag";

export const GET_ALL_CARS_ = gql`
  query GetVehicles {
    vehicles {
      id
      name
      mileage
      gearType
      gas
      dailyPrice
      monthlyPrice
      thumbnailUrl
    }
  }
`;
