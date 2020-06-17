import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";
import Poker from "./Poker";

const FreeCard = props => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.POKER,
    drop: item => {
      if (props.type === "freedom" && item.source === "random") {
        props.dispatch({
          type: "DROP_FREEDOM",
          index: props.index,
          payload: item.name
        });
        props.dispatch({
          type: "POP_RANDOM",
          payload: item.name
        });
      }
      if (props.type === "freedom" && item.source === "freedom") {
        props.dispatch({
          type: "POP_FREEDOM",
          payload: item.name
        });
        props.dispatch({
          type: "DROP_FREEDOM",
          index: props.index,
          payload: item.name
        });
      }
      console.log("droped: ", props.index, `(${props.source})`);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div className="card-target" ref={drop}>
      {!!props.name && (
        <Poker name={props.name} isCanDrag={true} source="freedom" />
      )}
    </div>
  );
};

export default FreeCard;
