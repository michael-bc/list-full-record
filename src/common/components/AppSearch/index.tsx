import React from 'react';
import {Spinner} from "flowbite-react";
import AppIcon from "../AppIcon";

export default function(props: {
  search: string;
  isLoading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void
}) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    props.onSearch();
    event.preventDefault();
  }

  return (
    <form className="flex items-center" onSubmit={onSubmit}>
      <div className="relative w-full">
        <input
          type="text" id="simple-search"
          value={props.search}
          onChange={(e) => props.onChange(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-10 h-10 p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {props.isLoading ? (
          <Spinner className="w-5 h-5" />
        ) : (
          <AppIcon name="search" className="w-5 h-5" />
        )}
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}
