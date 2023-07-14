import React, { useState } from "react";
import axios from "axios";
import {  Box, Flex, Spacer, Heading, Button, Stack, useDisclosure, useToast } from "@chakra-ui/react";
import { ChevronUpIcon } from '@chakra-ui/icons'
import { CommonButton } from "./organisms/molecules/atoms/Commonbutton";
import { CommonIconButton } from "./organisms/molecules/atoms/CommonIconButton";
import { InputButton } from "./organisms/molecules/InputButton";
import { MouseEventHandler, memo } from "react";
import { PokeModal } from "./organisms/PokeModal";
import { PokemonData } from "../utils/utils";
import { jaToEn } from "../utils/enToJa";

type PageheaderProps = {
  title: string;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
}

const Pageheader: React.FC<PageheaderProps> = memo((props) => {
  
  const { title, onClickPrev, onClickNext} = props;
  const [pokeData, setPokeData] = useState<PokemonData>({})
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleReloadPage = () => {
   window.location.reload(); 
  }
  const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
  const onClickSearch = async (arg: keyof typeof jaToEn | "") => {
    if ((arg === "") || !(arg in jaToEn)){
      toast({
        title: 'input error.',
        position: 'top',
        description: `${arg} is not exist.`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    try {
      const res = await axios.get(`${baseURL}${jaToEn[arg].toLowerCase()}`);
      setPokeData(res.data);
      onOpen()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box position="sticky" top={0} left={0} right={0} bg="red.300" boxShadow="md" p={4} zIndex="sticky">
        <Flex align="center" py={2} wrap="wrap">
          <Box mb={2}>
            <Button variant="unstyled" onClick={handleReloadPage}>
              <Heading as="h1" size="lg">
                {title}
              </Heading>
            </Button>
          </Box>
          <Spacer/>
          <Box mb={2} zIndex="tooltip">
            <InputButton
              placeholder='Enter PokeName'
              buttonText='search'
              leftAddonText='pokeSearch'
              addEvent={onClickSearch}
            />
          </Box>
          <Spacer/>
          <Stack spacing={2} direction='row' align='center' ml="auto" mb={2} zIndex="sticky">
            <CommonButton onClick={onClickPrev}>
              Prev 100
            </CommonButton>
            <CommonButton onClick={onClickNext}>
              Next 100
            </CommonButton>
            <CommonIconButton
              icon={<ChevronUpIcon boxSize={10}/>}
              onClick={handleScrollToTop}
              label="Scroll to top"
            />
          </Stack>
        </Flex>
      </Box>
      <PokeModal isOpen={isOpen} onClose={onClose} pokeData={pokeData}/>
    </>
  );
})

export { Pageheader };
