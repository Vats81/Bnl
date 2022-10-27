import React from "react";

function NavigationMenu() {
  return (
    <>
      {/*</-- Navbar -->*/}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <navLink className="navbar-brand" href="#">
            <img
              src="https://betiyannidhi.com/images/eco-logo.png"
              height="40"
              alt="MDB Logo"
              loading="lazy"
            />
          </navLink>

          {/* <!-- Right links --> */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* <!-- Notification dropdown --> */}
            <li className="nav-item dropdown">
              <navLink
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </navLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <navLink className="dropdown-item" href="#">
                    Some news
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    Another news
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    Something else here
                  </navLink>
                </li>
              </ul>
            </li>

            {/* <!-- Icon --> */}
            <li className="nav-item">
              <navLink className="nav-link me-3 me-lg-0" href="#">
                <i className="fas fa-fill-drip"></i>
              </navLink>
            </li>
            {/* <!-- Icon --> */}
            <li className="nav-item me-3 me-lg-0">
              <navLink className="nav-link" href="#">
                <i className="fab fa-github"></i>
              </navLink>
            </li>

            {/* <!-- Icon dropdown --> */}
            <li className="nav-item dropdown">
              <navLink
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="flag-united-kingdom flag m-0"></i>
              </navLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-united-kingdom flag"></i>English
                    <i className="fa fa-check text-success ms-2"></i>
                  </navLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-poland flag"></i>Polski
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-china flag"></i>中文
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-japan flag"></i>日本語
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-germany flag"></i>Deutsch
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-france flag"></i>Français
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-spain flag"></i>Español
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-russia flag"></i>Русский
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    <i className="flag-portugal flag"></i>Português
                  </navLink>
                </li>
              </ul>
            </li>

            {/* <!-- Avatar --> */}
            <li className="nav-item dropdown">
              <navLink
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center me-3"
                href="#"
                id="#navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="22"
                  alt="Avatar"
                  loading="lazy"
                />
              </navLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <navLink className="dropdown-item" href="#">
                    My profile
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    Settings
                  </navLink>
                </li>
                <li>
                  <navLink className="dropdown-item" href="#">
                    Logout
                  </navLink>
                </li>
              </ul>
            </li>
            {/* <!-- Toggle button --> */}
            <button className="navbar-toggler" type="button">
              <i className="fas fa-bars"></i>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavigationMenu;
