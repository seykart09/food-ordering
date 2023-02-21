import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingCart, HiOutlineLocationMarker } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";

export const HomeNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand me-0" href="#">
          <BiUser style={{ width: 22, height: 22 }} />
        </a>

          <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <HiOutlineLocationMarker style={{ width: 20, height: 20 }} />
            <span className="ms-1">Achimota</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        <div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <a className="nav-link" aria-current="page" href="#">
                <HiOutlineShoppingCart style={{ width: 22, height: 22 }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <IoNotificationsOutline style={{ width: 22, height: 22 }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
