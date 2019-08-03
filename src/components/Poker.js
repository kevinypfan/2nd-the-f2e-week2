import React, { useEffect } from "react";
const files = require.context("../assets/pokers", true, /\.svg$/);

const Poker = props => {
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
    <div className="group-item">
      <img src={files(`./${props.name}.svg`)} />
    </div>
  );
};

export default Poker;
