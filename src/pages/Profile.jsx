import React from "react";
import netflix from "../img/avatar/netflix.png";
import WhoAdd from "../components/WhoAdd";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";

const Profile = () => {
  return (
    <>
      <aside className="col-3">
        <div className="custom-box row mb-4 no-gutters">
          <div className="col-10 mb-2 mr-auto ml-auto text-center">
            <img
              src={netflix}
              className="img-thumbnail-profile rounded-circle"
              alt="Netflix"
            />
          </div>
          <div className="col-12 row no-gutters">
            <h2 className="col-10">/Netflix</h2>
            <div className="col-2 text-right">
              <a
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
                className="avatar-added mt-2 mr-1"
              >
                added
              </a>
            </div>
            <small className="col-12 text-secondary mb-3">
              Next event in 3 days
            </small>
          </div>
          <p className="my-3">
            Urge regular el tiempo de un spoiler. Mejores amigos de
            @finnwolfhardofficial
            <br />
            <a
              href="http://www.netflix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.netflix.com
            </a>
          </p>

          <div
            className="btn-group"
            role="group"
            aria-label="Default button group"
          >
            <button type="button" className="btn">
              <i className="fab fa-instagram"></i>
            </button>
            <button type="button" className="btn">
              <i className="fab fa-facebook-square"></i>
            </button>
            <button type="button" className="btn">
              <i className="fab fa-youtube-square"></i>
            </button>
            <button type="button" className="btn">
              <i className="fab fa-twitch"></i>
            </button>
            <button type="button" className="btn">
              <i className="fab fa-twitter-square"></i>
            </button>
          </div>
        </div>

        <WhoAdd />
        <Footer />
      </aside>

      <main className="col-12 col-lg-9">
        <Calendar />
      </main>
    </>
  );
};

export default Profile;
