import React, { useState, memo, MouseEventHandler } from "react";
import { Input, InputGroup, InputLeftAddon, HStack } from "@chakra-ui/react";
import { CommonButton } from "./atoms/Commonbutton";
import { jaToEn } from "../../../utils/jaToEn";

type InputButtonProps = {
  placeholder: string;
  buttonText: string;
  leftAddonText: string;
  addEvent: (arg: keyof typeof jaToEn | "") => void ;
}

const InputButton: React.FC<InputButtonProps> = memo((props) => {
  const { placeholder, buttonText, leftAddonText, addEvent } = props;
  const [searchText, setSearchText] = useState<keyof typeof jaToEn | "">("");
  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);
  }
  const onClick = () => {
    addEvent(searchText)
  }

  return (
    <HStack spacing={2}>
      <InputGroup>
        <InputLeftAddon bg="whiteAlpha.500" children={leftAddonText} />
        <Input
         variant="filled"
         placeholder={placeholder}
         value={searchText}
         onChange={handleInputChange}
        />
      </InputGroup>
      <CommonButton onClick={onClick}>
        {buttonText}
      </CommonButton>
    </HStack>
  );
})

export { InputButton };