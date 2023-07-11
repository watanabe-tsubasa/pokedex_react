import React from "react";
import { Button } from "@chakra-ui/react";
import { colormap } from "./colormap";


type TypebuttonProps = {
  children: string;
}

const Typebutton: React.FC<TypebuttonProps> = (props)=> {

  const { children } = props
  const bgColor = colormap[children]  || "blue.200"
  const hoverStyles = {
    opacity: 1,
    transition: "opacity 0.8s",
    '&:hover': {
      bg: bgColor,
      color: 'blackAlpha.800',
      opacity: 0.8,
    },
  };

  return (
    <Button
     minW={100}
     variant='solid'
     bg={bgColor}
     color="white" 
     sx={hoverStyles}
     >
      {children}
    </Button>
  );
}

export { Typebutton }