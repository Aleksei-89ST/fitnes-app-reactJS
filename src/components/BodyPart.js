import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";

// карточки упражнений на разные части тела
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item)
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", heigth: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bolt"
        color="#3A1212"
        textTransform="capitalize"
      >{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
