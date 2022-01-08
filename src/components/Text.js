import React from "react";

export default function Fixed(props) {
  return (
    <text
      x="180"
      y="162"
      fontSize="144"
      fill="#f2f2f2"
      textAnchor="middle"
      alignmentBaseline="middle"
    >
      {props.children}
    </text>
  );
}
