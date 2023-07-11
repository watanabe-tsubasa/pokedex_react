import React, { MouseEventHandler } from "react";
import { Button } from "@chakra-ui/react";
import { commonButtonHoverStyle } from "../../../../utils/utils";

type CommonButtonProps = {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const CommonButton: React.FC<CommonButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <Button onClick={onClick} sx={commonButtonHoverStyle} bg="#6594FB" color="white">
      {children}
    </Button>
  )
}

export { CommonButton }