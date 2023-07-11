import React from "react";
import { IconButton } from "@chakra-ui/react";
import { IconProps } from "@chakra-ui/react";
import { commonButtonHoverStyle } from "../../../../utils/utils";

type CommonIconButtonProps = {
  icon: React.ReactElement<IconProps>;
  onClick: ()=>void;
  label: string;
}

const CommonIconButton: React.FC<CommonIconButtonProps> = (props) => {
  const { icon, onClick, label } = props;
  return (
    <IconButton
      icon={icon}
      onClick={onClick}
      aria-label={label}
      size="md"
      sx={commonButtonHoverStyle}
      bg="#6594FB"
      color="white"
      variant="solid"
    />
  );
}

export { CommonIconButton };