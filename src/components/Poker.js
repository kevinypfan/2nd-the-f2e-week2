import React, { useEffect } from "react";
const files = require.context("../assets/pokers", true, /\.svg$/);

const Poker = props => {
  // let cardPath;
  useEffect(() => {
    // const reqSvgs = require.context("../assets/pokers", true, /\.svg$/);
    // const svgs = reqSvgs.keys().reduce((images, path) => {
    //   images[/^\.\/(.*)\.svg$/g.exec(path)[1]] = reqSvgs(path);
    //   return images;
    // }, {});
    // console.log(require(`../assets/pokers/${props.name}`));
    // cardPath = import(`../assets/pokers/${props.name}`).then(
    //   res => res.default
    // );
    console.log(files.keys());
  }, []);
  return <img src={files(`./${props.name}.svg`)} />;
};

export default Poker;
