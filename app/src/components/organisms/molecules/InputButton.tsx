import React, { useState, memo, useMemo, KeyboardEvent, MouseEvent } from "react";
import { List, ListItem, Input, InputGroup, InputLeftAddon, HStack, Box } from "@chakra-ui/react";
import { CommonButton } from "./atoms/Commonbutton";
import { hiraToKata } from "../../../utils/utils";
import { jaToEn } from "../../../utils/enToJa";

type InputButtonProps = {
  placeholder: string;
  buttonText: string;
  leftAddonText: string;
  addEvent: (arg: keyof typeof jaToEn | "") => void ;
}

const InputButton: React.FC<InputButtonProps> = memo((props) => {
  const { placeholder, buttonText, leftAddonText, addEvent } = props;
  const [searchText, setSearchText] = useState<keyof typeof jaToEn | "">("");
  const [filteredLength, setFileteredLength] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const suggestionsList = useMemo(() => {
    return Object.keys(jaToEn)
  },[]);
  const MAX_SUGGESTIONS = 10;

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchText(value);
    if (value === '') {
      setSuggestions([]);
      setSelectedIndex(-1);
    } else {
      const displaySuggestions = generateSuggestions(value);
      setSuggestions(displaySuggestions);
    }
  };
  const onClick = () => {
    addEvent(searchText)
  };
  const onClickSuggest = (event: MouseEvent<HTMLLIElement>) => {
    const pokeName = (event.target as HTMLLIElement).innerText
    addEvent(pokeName as keyof typeof jaToEn);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const offset = filteredLength > 11 ? 2 : 1  
    if (event.key === "ArrowUp") {
      // 上キーが押された場合
      event.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : suggestions.length - offset));
    } else if (event.key === "ArrowDown") {
      // 下キーが押された場合
      event.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex < suggestions.length - offset ? prevIndex + 1 : 0));
    } else if (event.key === "Enter") {
      // エンターキーが押された場合
      if (selectedIndex !== -1) {
        event.preventDefault();
        addEvent(suggestions[selectedIndex] as keyof typeof jaToEn)
        setSearchText('')
        setShowMenu(false);
      }
    }
  };

  const generateSuggestions = (value: string) => {
    const filteredSuggestion = suggestionsList.filter(item => (item.includes(hiraToKata(value))));
    setFileteredLength(filteredSuggestion.length);
    setShowMenu(filteredSuggestion.length > 0);
    const limitedSuggestions = filteredSuggestion.slice(0, MAX_SUGGESTIONS)
    const remainingCount = filteredSuggestion.length - MAX_SUGGESTIONS;
    const displaySuggestions = remainingCount > 0 ? [...limitedSuggestions, `${MAX_SUGGESTIONS}件以上 (${remainingCount}件)`] : limitedSuggestions
    return displaySuggestions;
  }

  return (
    <HStack spacing={2} align="flex-start">
      <InputGroup>
        <InputLeftAddon bg="whiteAlpha.500" children={leftAddonText} />
        <Box position="relative" flex="1">
          <Input
            variant="filled"
            placeholder={placeholder}
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {showMenu && (
            <Box
              position="absolute"
              top="100%"
              left={0}
              width="100%"
              bg="whiteAlpha.900"
              borderRadius="md"
            >
              <List>
                {suggestions.map((elem, index) => (
                  <ListItem
                   key={index}
                   style={index === selectedIndex ? {
                    color:"red",
                    backgroundColor: "rgba(128, 128, 128, 0.5)"
                  } : {color:"black"}}
                   onClick={onClickSuggest}
                  >{elem}</ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </InputGroup>
      <CommonButton onClick={onClick}>
        {buttonText}
      </CommonButton>
    </HStack>
  );
})

export { InputButton };