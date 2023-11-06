import { Center, chakra, Text, keyframes } from "@chakra-ui/react";

export default function GridText() {
  const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
  `;
  return (
    <Center
      h="100dvh"
      maxH="100dvh"
      w="full"
      zIndex={"1"}
      align={"center"}
      pos={"relative"}
      justify={"center"}
      px={["1.5rem", "3rem", "5rem"]}
      bg="bg"
    >
      <Text fontSize={"5rem"} color='white' fontWeight={"bold"}>
        We bring your ideas 
        <chakra.span
          animation={`${gradient} 8s ease-in-out infinite`}
          transform="rotate(-38deg)"
          bg="linear-gradient(90deg,red, #A53594 ,#DA2128,#444187)"
          bgSize={'400% 400%'}
          bgClip={"text"}
        >
           {" "}to life
        </chakra.span>
      </Text>
    </Center>
  );
}
