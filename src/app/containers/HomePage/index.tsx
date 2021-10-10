import React from "react";
import BookCard from "../../components/BookCard";
import { Marginer } from "../../components/marginer";
import Navbar from "../../components/Navbar";
import AboutUs from "./components/AboutUs";
import BookingSteps from "./components/BookingSteps";
import TopVehicles from "./components/TopVehicles";
import TopSection from "./components/TopSection";

import { PageContainer } from "./styles";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="10em" />
      <AboutUs />
      <Marginer direction="vertical" margin="10em" />
      <TopVehicles />
      <Marginer direction="vertical" margin="10em" />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
