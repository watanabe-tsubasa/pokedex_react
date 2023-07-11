import React, { useState, memo, useCallback } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react'
import { PokemonData } from '../utils/utils';
import { Cardcontainer } from '../components/organisms/Cardcontainer';
import { PokeModal } from './organisms/PokeModal';

type PagebodyProps = {
  pokeDataList: PokemonData[];
}

const Pagebody: React.FC<PagebodyProps> = memo((props) => {
  const { pokeDataList } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalPokeData, setModalPokeData] = useState<PokemonData>({})
  
  const onClickImg = useCallback((alt: string) => {
    setModalPokeData(pokeDataList.filter(elem => elem.name === alt)[0])
    onOpen();
  }, [])
  
  return (
    <>
      <Flex flexWrap="wrap" justify='center'>
        {pokeDataList.map(elem => <Cardcontainer key={elem.name} pokeData={elem} onClickImg={onClickImg} />)}
      </Flex>
      <PokeModal isOpen={isOpen} onClose={onClose} pokeData={modalPokeData} />
    </>
  );
})

export { Pagebody };