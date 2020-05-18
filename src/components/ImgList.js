import React from "react";
import Img from "./Img";

const ImgList = props => {
  const resultData = props.data;

  let imgs;

  if (resultData.length > 0) {
    imgs = resultData.map(img => {
      return <Img url={img.image} key={img.id} name={img.name} />;
    });
  } else {
    imgs = <p>noImg</p>;
  }
  return <ul className="img-list">{imgs}</ul>;
};

export default ImgList;
