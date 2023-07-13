import React, { memo } from 'react'
import { Box, Card, CardBody, Divider, Flex, HStack, Heading, Image, StackDivider, Text, VStack } from '@chakra-ui/react'
import { PokemonData } from '../../utils/utils';
import { Textbutton } from './molecules/Textbutton';
import { commonHoverStyle } from '../../utils/utils';
import { enToJa } from '../../utils/enToJa';

type CardconteinerProps = {
    pokeData: PokemonData;
    onClickImg: (arg: string)=>void;
}

const Cardcontainer: React.FC<CardconteinerProps> = memo((props) => {
  const { pokeData, onClickImg } = props;
  const handleImageClick = (event: any) => {
    const alt: any = (event.target as HTMLImageElement).alt;
    onClickImg(alt);
  };
  const { name } = pokeData;
  const lowerName = name?.toLowerCase()
  const translation = enToJa[lowerName as keyof typeof enToJa] || lowerName

  return (
    <Box
      className='CardContainer'
      mx={4}
      my={2}
    >
      <Card maxW='sm'>
        <CardBody>
          <Flex justify='center' align='center'>
            <Heading color='blackAlpha.800' size='xl'>{translation}</Heading>
          </Flex>
          <Divider/>
          <Flex justify='center' align='center'>
            <Image
              src={pokeData.sprites ? pokeData.sprites.other["official-artwork"].front_default || pokeData.sprites.front_default : "public/noimage-1.png"}
              alt={lowerName}
              boxSize={250}
              sx={commonHoverStyle}
              onClick={handleImageClick}
            />
          </Flex>
          <Divider/>
          <VStack mt='1' spacing='3' divider={<StackDivider/>}>
            <Textbutton
             pokeData={pokeData}
             tytle="types"
             detail="type"
            />
            <Box>
              <HStack spacing='2'>
                <Text color='blackAlpha.800' fontSize='xl'>weight</Text>
                <Text color='blackAlpha.800' fontSize='xl'>{pokeData.weight}</Text>
              </HStack>
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  )
});

export { Cardcontainer };