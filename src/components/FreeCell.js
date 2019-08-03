import React from "react";

const FreeCell = props => {
  return (
    <div className="freecell">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default FreeCell;
