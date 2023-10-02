import React from 'react';

export default function(props: { title: string; }) {
  return (
    <h3 className="text-3xl font-bold dark:text-white">{props.title}</h3>
  );
}
