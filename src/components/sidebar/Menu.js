import { Icon } from "../../../src/Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 gap-x-4 flex items-center text-sm font-semibold  rounded hover:text-white px-4"
                : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            }
          >
            <span>
              <Icon name="home" />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 gap-x-4 flex items-center text-sm font-semibold  rounded hover:text-white px-4"
                : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            }
          >
            <span>
              <Icon name="search" />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 gap-x-4 flex items-center text-sm font-semibold  rounded hover:text-white px-4"
                : "h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4"
            }
          >
            <span>
              <Icon name="collection" />
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
