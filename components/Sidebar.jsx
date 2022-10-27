import React from "react";

function Sidebar() {
  return (
    <>
      <nav
        id="SidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple "
              aria-current="true"
              style={{ backgroundColor: "#4D3F9A", color: "white" }}
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Main dashboard</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple "
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <span>Webiste traffic</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Password</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-line fa-fw me-3"></i>
              <span>Analytics</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-pie fa-fw me-3"></i>
              <span>SEO</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i>
              <span>Orders</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-globe fa-fw me-3"></i>
              <span>International</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-building fa-fw me-3"></i>
              <span>Partners</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-calendar fa-fw me-3"></i>
              <span>Calendar</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-users fa-fw me-3"></i>
              <span>Users</span>
            </navLink>
            <navLink
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3"></i>
              <span>Sales</span>
            </navLink>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Sidebar;
