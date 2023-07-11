import React, { useState, useEffect, useCallback} from 'react';
import { Box, Button, ButtonGroup, Card, CardBody, Flex, HStack, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Stack, StackDivider, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { getList, getPokeData, PokemonData } from './utils/utils';
import { Pageheader } from './components/Pageheader';
import { Pagebody } from './components/Pagebody';
import { Pagefooter } from './components/Pagefooter';
import { CommonSpinner } from './components/organisms/molecules/atoms/CommonSpinner';


function App() {

  const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
  const query = 'limit=100'
  const [prevURL, setPrevURL] = useState("");
  const [nextURL, setNextURL] = useState("");
  const [pokeDataList, setPokeDataList] = useState<PokemonData[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchText(event.target.value);
  // }, [])

  const fetchPokeData = useCallback(async (url: string) => {
    setIsLoading(true);
    const res = await getList(url);
    setPrevURL(res.previous);
    setNextURL(res.next);
    try {
      const pokeData = await getPokeData(res.results);
      setPokeDataList(pokeData);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [])

  const getNextPokeData: () => Promise<void>  = useCallback(async() => {
    if (nextURL === null) {return;}
    await fetchPokeData(nextURL);
  }, [pokeDataList])
  const getPrevPokeData: () => Promise<void>  = useCallback(async() => {
    if (prevURL === null) {return;}
    await fetchPokeData(prevURL);
  }, [pokeDataList])
  useEffect(() => {
    fetchPokeData(`${baseURL}?${query}`) 
  }, []);

  return (
    <Box className="App" role="main">
      <Pageheader
       title='PokeDex'
       onClickPrev={getPrevPokeData}
       onClickNext={getNextPokeData}
      />
      {isLoading ? (
        <CommonSpinner/>
      ) : (
        <>
          <Pagebody pokeDataList={pokeDataList}/>
        </>
      )}
      <Pagefooter />
    </Box>
  );  
}

export default App;
