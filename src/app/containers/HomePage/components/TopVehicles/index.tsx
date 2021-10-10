import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import { IVehicle } from "../../../../../@types/vehicle";
import Vehicle from "../../../../components/Vehicle";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  VehiclesContainer,
  Title,
  TopVehiclesContainer,
  EmptyVehicles,
  LoadingContainer,
} from "./styles";
import { SCREENS } from "../../../../components/responsives";
import vehicleServices from "../../../../services/vehicleServices";
import { Dispatch } from "redux";
import { GetVehicles_vehicles } from "../../../../services/vehicleServices/__generated__/GetVehicles";
import { setTopVehicles } from "../../slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopVehicles } from "../../selectors";
import MoonLoader from "react-spinners/MoonLoader";
import { IVehicle } from "../../../../../@types/vehicle";

const testVehicle1: IVehicle = {
  name: "Eletric Scooter MUV 1600W MXF",
  mileage: "12km",
  thumbnailSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYQWgt2xf3vvcuYbFC7zKD2S39mkdtb3pew28vHjxfuV9kec6HW_wikFcbKKFDD1TJJQG2pQ&usqp=CAc",
  dailyPrice: "20",
  monthPrice: "300",
  gearType: "Auto",
  gas: "Eletric",
};

const actionDispatch = (dispatch: Dispatch) => ({
  setTopVehicles: (vehicles: GetVehicles_vehicles[]) =>
    dispatch(setTopVehicles(vehicles)),
});

const stateSelector = createSelector(makeSelectTopVehicles, (topVehicles) => ({
  topVehicles,
}));

const TopVehicles = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const { topVehicles } = useSelector(stateSelector);
  const isMobile = useMediaQuery({ maxDeviceWidth: SCREENS.sm });

  const isEmptyTopVehicles = !topVehicles || topVehicles?.length === 0;

  // const vehicles =
  //   (!isEmptyTopVehicles &&
  //     topVehicles.map((veh) => (
  //       <Vehicle
  //         {...veh}
  //         dailyPrice={veh.dailyPrice.toString()}
  //         thumbnailSrc={veh.thumbnailUrl}
  //         monthPrice={veh.monthlyPrice.toString()}
  //       />
  //     ))) ||
  //   [];

  const vehicles = [
    <Vehicle {...testVehicle1} />,
    <Vehicle {...testVehicle1} />,
    <Vehicle {...testVehicle1} />,
  ];

  const numberOfDots = isMobile
    ? vehicles.length
    : Math.ceil(vehicles.length / 3);

  // const { setTopVehicles } = actionDispatch(useDispatch());

  // const fetchTopVehicles = async () => {
  //   setLoading(true);
  //   const vehicles = await vehicleServices.getVehicles().catch((err) => {
  //     console.log("ERROR =>", err);
  //     setLoading(false);
  //   });

  //   setLoading(false);
  //   if (vehicles) {
  //     setTopVehicles(vehicles);
  //   }
  // };

  // useEffect(() => {
  //   fetchTopVehicles();
  // }, []);

  // if (isEmptyTopVehicles) return null;

  return (
    <TopVehiclesContainer>
      <Title>MOST VIEWED ONES</Title>
      {loading && (
        <LoadingContainer>
          <MoonLoader loading size={50} />
        </LoadingContainer>
      )}
      {/* {isEmptyTopVehicles && !loading && (
        <EmptyVehicles>No Vehicles to Show</EmptyVehicles>
      )} */}
      {!loading && (
        <VehiclesContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={vehicles}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </VehiclesContainer>
      )}
    </TopVehiclesContainer>
  );
};

export default TopVehicles;
