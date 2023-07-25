import { Center,Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import Card from './Card'

export default function Services() {
  return (
      <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      px={['1.5rem','3rem','5rem']}
      py='1rem'
      justifyContent={'center'}
      >
        <Heading justifySelf={'start'} >Services</Heading>
        <SimpleGrid columns={[1,2,3]} gap='2rem'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </SimpleGrid>
      </VStack>
  )
}


