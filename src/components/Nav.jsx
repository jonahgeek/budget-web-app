import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Budget Web Application
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
