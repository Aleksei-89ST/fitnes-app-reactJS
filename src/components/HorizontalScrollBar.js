import { Box,Typography } from "@mui/material";
import React, {useContext}from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from "./BodyPart";
import IconL from "../assets/icons/left-arrow.png";
import IconR from "../assets/icons/right-arrow.png";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <img src={IconL} alt="left-arrow"/>
      </Typography>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <img src={IconR} alt="right-arrow"/>
      </Typography>
    );
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
