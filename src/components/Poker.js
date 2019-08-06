import React, { useEffect } from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import ItemTypes from "../ItemTypes";

const files = require.context("../assets/pokers", true, /\.svg$/);

const Poker = props => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.POKER, name: props.name },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
    canDrag: monitor => props.isCanDrag
  });
  // let cardPath;
  // useEffect(() => {
  // const reqSvgs = require.context("../assets/pokers", true, /\.svg$/);
  // const svgs = reqSvgs.keys().reduce((images, path) => {
  //   images[/^\.\/(.*)\.svg$/g.exec(path)[1]] = reqSvgs(path);
  //   return images;
  // }, {});
  // console.log(require(`../assets/pokers/${props.name}`));
  // cardPath = import(`../assets/pokers/${props.name}`).then(
  //   res => res.default
  // );
  // console.log(files.keys());
  // }, []);
  // let Card = props.pokers[props.name];
  // let CardStyle = {
  //   backgroundImage: `url(${files(`./${props.name}.svg`)})`
  // };
  // return <div className="group-item" style={CardStyle} />;
  return (
    <>
      <DragPreviewImage connect={preview} src={files(`./${props.name}.svg`)} />
      <div
        className="group-item"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1
        }}
      >
        <img src={files(`./${props.name}.svg`)} />
      </div>
    </>
  );
};

export default Poker;
