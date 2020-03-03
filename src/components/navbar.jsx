import React from "react";

//cannot use lifecycle hooks (e.g. componentDidMount()) in stateless
//functional components!

const NavBar = ({ totalCounters }) => {
  console.log("Navbar rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
