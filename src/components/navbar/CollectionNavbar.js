import React from 'react';
import { NavLink } from 'react-router-dom';


function CollectionNavbar() {
  return (
          
    <nav className="flex items-center justify-center ml-6 mr-auto relative">
    <ul className="flex items-center">
      <li>
        <NavLink
          to={"/Playlists"}
          className={({ isActive }) =>
            isActive
              ? "bg-active rounded-[4px] w-24 h-full py-2 px-4 text-sm font-bold text-white"
              : "w-24 h-full py-2 px-4 text-sm font-bold text-white"
          }
        >
          Playlists
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Podcasts"}
          className={({ isActive }) =>
            isActive
              ? "bg-active rounded-[4px] w-24 h-full py-2 px-4 text-sm font-bold text-white"
              : "w-24 h-full py-2 px-4 text-sm font-bold text-white"
          }
        >
          Podcasts
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Artists"}
          className={({ isActive }) =>
            isActive
              ? "bg-active rounded-[4px] w-24 h-full py-2 px-4 text-sm font-bold text-white"
              : "w-24 h-full py-2 px-4 text-sm font-bold text-white"
          }
        >
         Artists
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Albums"}
          className={({ isActive }) =>
            isActive
              ? "bg-active rounded-[4px] w-24 h-full py-2 px-4 text-sm font-bold text-white"
              : "w-24 h-full py-2 px-4 text-sm font-bold text-white"
          }
        >
         Albums
        </NavLink>
      </li>
    </ul>
  </nav>
          
      
  )
}

export default CollectionNavbar;
