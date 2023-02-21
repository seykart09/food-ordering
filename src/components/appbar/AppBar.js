import { MdOutlineFoodBank } from "react-icons/md";
import { RiRestaurantLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

export const AppBar = () => {
  return (
    <div className="appbar shadow">
      <div className="container">
        <ul className="navbar-nav flex-row justify-content-around align-items-center">
          <li className="nav-item text-center">
            <a className="nav-link active" aria-current="page" href="#">
              <RiRestaurantLine style={{ width: 25, height: 25 }} />
              <p className="mb-0 small">Dishes</p>
            </a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" aria-current="page" href="#">
              <MdOutlineFoodBank style={{ width: 25, height: 25 }} />
              <p className="mb-0 small">Restaurant</p>
            </a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" aria-current="page" href="#">
              <TfiMenuAlt style={{ width: 25, height: 20 }} />
              <p className="mb-0 small">Your Orders</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
