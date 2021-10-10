/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVehicles
// ====================================================

export interface GetVehicles_vehicles {
  __typename: "Vehicle";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string;
}

export interface GetVehicles {
  vehicles: GetVehicles_vehicles[];
}
