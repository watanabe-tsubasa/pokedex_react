import React, { memo } from "react";
import { Box, Card, CardBody, Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import { PokemonData } from "../../utils/utils";
import { Cardcontainer } from "./Cardcontainer";
import { CommonButton } from "./molecules/atoms/Commonbutton";
import { Textbutton } from "./molecules/Textbutton";
import { Statscontainer } from "./Statscontainer";
import { enToJa } from "../../utils/enToJa";

type PokeModalProps = {
  isOpen: boolean;
  onClose: ()=>void;
  pokeData: PokemonData;
}

const PokeModal: React.FC<PokeModalProps> = memo((props)=> {
  const { isOpen, onClose, pokeData } = props

  return (Object.keys(pokeData).length === 0 ? <></>:
    <>
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>{pokeData.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex wrap="wrap" justifyContent="center" align="flex-start">
              <Box flex={1} width={350} flexGrow={1} flexBasis="0">
                <VStack>
                  <Cardcontainer pokeData={pokeData} onClickImg={()=>{return}}/>
                </VStack>
              </Box>
              <Box flex={1} flexGrow={1} flexBasis="0">
                <VStack>
                  <Card width={350}>
                    <CardBody>
                      <Statscontainer pokeData={pokeData}/>
                      <Divider/>
                      <Textbutton pokeData={pokeData} tytle="abilities" detail="ability"></Textbutton>
                      <Divider/>
                      <Textbutton pokeData={pokeData} tytle="held_items" detail="item"></Textbutton>          
                    </CardBody>
                  </Card>
                </VStack>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <CommonButton onClick={onClose}>Close</CommonButton>
          </ModalFooter>
        </ModalContent>
    </Modal>
  </>
  )
})

export { PokeModal };