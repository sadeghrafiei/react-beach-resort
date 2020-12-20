import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeautuerdRooms from '../components/FeautuerdRoom'


function Home() {
  return (
      <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="delux rooms starting at $299 ">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeautuerdRooms/>
    </>
  );
}

export default Home;
