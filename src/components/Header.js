import React from "react";
import { Link } from "react-router-dom";
import Search from './Search'

const Header = () => {
  return (
    <nav className="row mb-4">
      <Link to="/Home" className="col-3 logo">
        <img src="img/logo.png" alt="vntbox" />
      </Link>

      <div className="col-5 row no-gutters">
        <Search />
      </div>
      <div className="col-4 text-right user-perfil">
        <div className="row no-gutters">
          <h4 className="col-8 user-perfil-name text-truncate">
            <a href="Profile">Martin Brumana</a>
          </h4>
          <div className="col-2 user-perfil-img">
            <a href="Profile">&nbsp;</a>
          </div>
          <div className="col-2 user-perfil-dots">
            {/* <i className="fas fa-plus-square" title="Add Event" /> */}
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
