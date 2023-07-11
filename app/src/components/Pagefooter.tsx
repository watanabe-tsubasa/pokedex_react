import React, { memo } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Pagefooter = memo(() => {
  return (
    <Box bg="#263238" py={2} position="sticky" bottom={0} left={0} right={0}>
      <Flex align="center" justifyContent="end" wrap="wrap" mr={4}>
        <Text color="white">data is gotten by</Text>
        <a href="https://pokeapi.co/">
          <Image src="/pokeapi_256.png" alt="pokeAPI" maxH={10} />
        </a> 
      </Flex>
    </Box>
  );
})

export { Pagefooter};
