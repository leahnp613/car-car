import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button
                className="btn btn-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/manufacturers">
                    Manufacturer List
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/manufacturers/new">
                    Manufacturer Form
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/models">
                    Model List
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/models/new">
                    Model Form
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/automobiles">
                    Automobile List
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/automobiles/new">
                    Automobile Form
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/sales_records">
                    Sales Record List
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales_records/new">
                    Sales Record Form
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales_persons/new">
                    Sales Person Form
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/customers/new">
                    Customer Form
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <Link className="dropdown-item" to="/customers/<int:pk>/">
                    Customer List
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"  />
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales/history/">
                    Sales Person History
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales/<int:pk>/">
                    Sales Person List
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/services">
                    Service appointments
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/history">
                    Service history
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/new">

                    Service Form

                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/technician/new">
                    Technician Form
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Nav;
