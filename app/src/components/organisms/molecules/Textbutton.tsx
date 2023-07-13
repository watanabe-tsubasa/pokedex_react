import React from 'react'
import { Typebutton } from './atoms/Typebutton'
import { PokemonData } from '../../../utils/utils'
import { Box, ButtonGroup, Flex, Text } from '@chakra-ui/react';

type TextbuttonProps = {
  pokeData: PokemonData;
  tytle: keyof PokemonData;
  detail: string;
}

const Textbutton: React.FC<TextbuttonProps> = (props) => {

  const { pokeData, tytle, detail } = props;
  

  return (
    <Box>
      <Flex justify="center"  mb={2}>
        <Text color='blackAlpha.800' fontSize='xl'>
          {tytle}
        </Text>
      </Flex>
      <Flex justify="center"  mb={2}>
        <Flex maxW={350} overflow="auto">
          <ButtonGroup spacing='2'>
            {tytle === "abilities" && pokeData.abilities ? (
              [...new Set(pokeData.abilities.map((elem: { ability: { name: string } }) => elem.ability.name))]
              .map((abilityName: string) => (
                  <Typebutton key={abilityName}>{abilityName}</Typebutton>
                ))
            ) : tytle === "types" && pokeData.types ? (
              pokeData.types.map((elem: { type: { name: string } }) => (
                <Typebutton key={elem.type.name}>{elem.type.name}</Typebutton>
              ))
            ) : tytle === "held_items" && pokeData.held_items ? (
              pokeData.held_items.map((elem: { item: { name: string } }) => (
                <Typebutton key={elem.item.name}>{elem.item.name}</Typebutton>
              ))
            ) : (
              "存在しませんでした"
            )}
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  )
}

export { Textbutton };