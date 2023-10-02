import React from 'react';
import {NavLink} from "react-router-dom";
import routes from "./routes";
import AppIcon from "../AppIcon";

export default function() {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          {routes.map((route) => (
            <NavLink
              className={({isActive}) =>
                `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  isActive ? 'font-bold': ''
                }`}
              to={route.to}
              key={route.name}
            >
              <AppIcon
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                name={route.icon}
              />
              <span className="ml-3">{route.label}</span>
            </NavLink>
          ))}
        </li>
      </ul>
    </div>
  );
}
