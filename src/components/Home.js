import React from "react";
import MainEvents from "./MainEvents";
import WhoAdd from "./WhoAdd";
import Footer from "./Footer";
import Calendar from "./Calendar";

const Home = () => {
  return (
    <>
      <aside className="col-3 d-none d-lg-block">
        <MainEvents />
        <WhoAdd />
        <Footer />
      </aside>

      <main className="col-12 col-lg-9">
        <Calendar />
      </main>
    </>
  );
};

export default Home;
