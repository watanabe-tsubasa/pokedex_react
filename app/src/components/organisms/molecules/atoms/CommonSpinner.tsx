import React, { memo } from 'react';
import { Flex, Spinner} from '@chakra-ui/react'

const CommonSpinner = memo(() => {
  return (
    <Flex align="center" justify='center' minH="80vh">
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex>
  )
})

export { CommonSpinner };