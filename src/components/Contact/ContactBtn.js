import { Button } from "@chakra-ui/react";
export default function ContactBtn ({childern}){
    return(
    <Button variant={'ghost'} color={'white'} colorScheme='whiteAlpha'>
        <>
      {childern}
      </>
    </Button>
    );

    }