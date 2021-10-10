import { apolloClient } from "../../containers/HomePage/components/graphql";
import { GET_ALL_CARS_ } from "./queries";
import { GetVehicles_vehicles } from "./__generated__/GetVehicles";

class VehicleService {
  public async getVehicles(): Promise<GetVehicles_vehicles[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS_ })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.vehicles) {
      return response.data.vehicles as GetVehicles_vehicles[];
    }

    return [];
  }
}

export default new VehicleService();
