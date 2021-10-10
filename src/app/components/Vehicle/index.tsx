import React from "react";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IVehicle } from "../../../@types/vehicle";
import { SmallIcon } from "../BookCard/styles";

import {
  DailyPrice,
  MonthlyPrice,
  PricesContainer,
  RentButton,
  Separator,
  SmallText,
  VehicleContainer,
  VehicleDetail,
  VehicleDetailsContainer,
  VehicleInfo,
  VehicleName,
  VehicleThumbmail,
} from "./styles";

interface IVehiclesProps extends IVehicle {}

const Vehicle = (props: IVehiclesProps) => {
  const { name, dailyPrice, monthPrice, mileage, gas, gearType, thumbnailSrc } =
    props;

  return (
    <VehicleContainer>
      <VehicleThumbmail>
        <img src={thumbnailSrc} alt="thumb" />
      </VehicleThumbmail>
      <VehicleName>{name}</VehicleName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <VehicleDetailsContainer>
        <VehicleDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <VehicleInfo>{mileage}</VehicleInfo>
        </VehicleDetail>

        <VehicleDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <VehicleInfo>{gearType}</VehicleInfo>
        </VehicleDetail>

        <VehicleDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <VehicleInfo>{gas}</VehicleInfo>
        </VehicleDetail>
      </VehicleDetailsContainer>
      <RentButton text="RENT" />
    </VehicleContainer>
  );
};

export default Vehicle;
