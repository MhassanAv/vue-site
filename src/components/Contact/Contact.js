import { Button, Center,Flex,Heading, VStack } from '@chakra-ui/react'
import ContactBtn from './ContactBtn'



export default function Contact() {


  return (
      <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      px={["1.5rem", "3rem", "10rem"]}
      py='1rem'
      justifyContent={'space-evenly'}
      >
        <Heading textShadow={
            "3px 3px #A53594"
          }>Contact</Heading>
        <Center h='80vh' w='full' bg={'white'} rounded={'4rem'}p={'1rem'} >\
        <VStack h='full' flex={'1.5'} bg='#011C2B' rounded={'4rem'} p='2rem'>
          <Heading fontSize={["3.5vh", "1.5rem", "1.5rem"]}>
          Contact Information
          </Heading>
          <Center h='full'>
          <Flex flexDir={'column'} gap='1rem'>
            <ContactBtn>
            +201555195995
            </ContactBtn>
            <ContactBtn>
            info@vuedigitalsolutions.com
            </ContactBtn>
            <ContactBtn >
            LinkedIn
            </ContactBtn>
            <ContactBtn >
            Facebook
            </ContactBtn>
            <ContactBtn >
            Whatsapp
            </ContactBtn>
            <ContactBtn>
            Behance
            </ContactBtn>
          </Flex>
          </Center>
        </VStack>
        <VStack h='full' flex='3'>

        </VStack>
        </Center>
      </VStack>
  )
}