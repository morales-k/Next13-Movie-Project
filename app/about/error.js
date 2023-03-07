"use client";

import React from 'react'

const error = (err, reset) => {
  return (
    <div>
      <p>{`An error occured: ${err.error}`}</p>
      <button onClick={() => reset()}>Reload</button>
    </div>
  )
};

export default error;