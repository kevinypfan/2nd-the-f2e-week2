import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";
import Poker from "./Poker";

const FreeCard = props => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.POKER,
    drop: item => {
      if (props.type === "freedom") {
        props.dispatch({
          type: "DROP_FREEDOM",
          index: props.index,
          payload: item.name
        });
      }
      console.log("droped: ", props.index, `(${props.type})`);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div className="card-target" ref={drop}>
      {!!props.name && <Poker name={props.name} isCanDrag={true} />}
    </div>
  );
};

export default FreeCard;
