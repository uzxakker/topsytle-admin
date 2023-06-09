import React from "react";
import { Button } from "./styled-index";

const CommonBtn = ({ children, type, onClick, style }) => {
  return (
    <>
      <Button type={type} style={style} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default CommonBtn;
