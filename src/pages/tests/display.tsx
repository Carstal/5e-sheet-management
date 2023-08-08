import React, { useState, useEffect } from "react";

interface Props {
  number: number;
  name: number;
}

const Display: React.FC<Props> = ({ name, number }) => {
  return (
    <div className="numberlabel">
      <h1>{name}</h1>
      <h2>{number}</h2>
    </div>
  );
};

export default Display;
