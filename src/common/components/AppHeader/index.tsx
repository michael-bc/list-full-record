import React from 'react';
import {NavLink} from "react-router-dom";
import AppIcon from "../AppIcon";

export default function() {
  return (
    <div className="container flex items-center justify-between px-8 mx-auto">
      <div className="flex gap-2 items-center">
        <button
          data-drawer-target="left-sidebar"
          data-drawer-toggle="left-sidebar"
          aria-controls="left-sidebar"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <NavLink to="/" className="text-3xl">Company Name</NavLink>
      </div>
      <div className="flex gap-3">
        <button>
          <AppIcon name="message" className="w-8 h-8" />
        </button>
        <button>
          <AppIcon name="notification" className="w-8 h-8" />
        </button>
        <button>
          <AppIcon name="user" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
