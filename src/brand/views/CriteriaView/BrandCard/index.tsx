import React from 'react';
import {Card, Rating} from "flowbite-react";

export default function(props: {
  name: string,
  image?: string,
  productCount: number,
  averageRating: number,
}) {
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={props.image}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        <p>
          {props.name}
        </p>
      </h5>
      <div>Product(s): {props.productCount || 0}</div>
      <div className="mb-5 mt-2.5 flex items-center">
        <Rating>
          <Rating.Star filled={props.averageRating > 0} />
          <Rating.Star filled={props.averageRating > 1} />
          <Rating.Star filled={props.averageRating > 2} />
          <Rating.Star filled={props.averageRating > 3} />
          <Rating.Star filled={props.averageRating > 4} />
        </Rating>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p>
            {props.averageRating} / 5
          </p>
        </span>
      </div>
      <div className="flex items-center">
        <a
          className="w-full rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p>
            View
          </p>
        </a>
      </div>
    </Card>
  );
}
