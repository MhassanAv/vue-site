import {
  Button,
  Center,
  Flex,
  Heading,
  VStack,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdPhone, MdMail } from "react-icons/md";
import { SiLinkedin, SiFacebook, SiBehance, SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import Btn from "../Btn";





const ContactBtn = ({ children, icon }) => {
  const [isNotMobile] = useMediaQuery('(min-width: 765px)');
  return (
    <Button
      variant={"ghost"}
      color={"white"}
      colorScheme="whiteAlpha"
      justifyContent={"start"}
      transition={"all 0.3s ease"}
      alignItems={"center"}
      gap={["1.5rem"]}
      _hover={{ color: "prim" }}
    >
      {icon}
      {isNotMobile && children}
    </Button>
  );
};

export default function Contact() {
  const [isNotMobile] = useMediaQuery('(min-width: 1300px)');
  const [VerySmall] = useMediaQuery('(min-width: 300px)');
  

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  // const FormBtn = ({ children }) => {
  //   return (
  //     <Button
  //       rounded={"full"}
  //       variant={"unstyled"}
  //       transition={"all 0.3s ease"}
  //       display="flex"
  //       h="3.5rem"
  //       w={["10.438rem", "10.438rem", "14.438rem"]}
  //       fontSize={["1rem", "1.2rem"]}
  //       fontWeight={"500"}
  //       type="submit"
  //       isLoading={isSubmitting}
  //       bg="prim"
  //       alignItems={"center"}
  //       justifyContent={"center"}
  //       mt='1rem'
  //       _hover={{
  //         transform: "scale(1.05)",
  //       }}
  //     >
  //       {children}
  //     </Button>
  //   );
  // };

  return (
    <VStack
      h="100dvh"
      maxH="100dvh"
      w="full"
      px={["1.5rem", "3rem", "10rem"]}
      py="1rem"
      justifyContent={"space-evenly"}
    >
      <Heading >Contact</Heading>
      <Center h="85vh" w="full" bg={"white"} rounded={"3.7rem"} p={"1rem"}>
        <Flex
          w="full"
          h="full"
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <VStack
            transition={'all 0.3s ease'}
            maxH={['8rem','8rem','full']}
            flex={"1.5"}
            bg="black"
            rounded={"3rem"}
            p={["1rem", "1rem", "2rem", "3rem", "3rem"]}
            py="1.5rem"
          >
            <Heading
              fontSize={["2.5vh", "1.2rem", "1.2rem","1.2rem","1.5rem"]}
              display={["none","none", "block"]}
            >
              Contact Information
            </Heading>
            <Center h="full">
              <Flex flexDir={["row", "row", "column"]} gap={['0','0','0','0',"1rem"]} transition={'all 0.3s ease'}>
                <ContactBtn icon={<MdPhone size={isNotMobile?"30":"25"} />}>
                  +201555195995
                </ContactBtn>
                {!VerySmall&&<ContactBtn icon={<MdMail size={isNotMobile?"30":"25"} />}>
                 info@vuedigitalsolutions.com
                </ContactBtn>}
                <ContactBtn icon={<SiLinkedin size={isNotMobile?"30":"25"} />}>
                  LinkedIn
                </ContactBtn>
                <ContactBtn icon={<SiFacebook size={isNotMobile?"30":"25"} />}>
                  Facebook
                </ContactBtn>
                <ContactBtn icon={<SiWhatsapp size={isNotMobile?"30":"25"} />}>
                  Whatsapp
                </ContactBtn>
                {isNotMobile&&<ContactBtn icon={<SiBehance size={isNotMobile?"30":"25"} />}>
                  Behance
                </ContactBtn>}
              </Flex>
            </Center>
          </VStack>
          <VStack h="full" flex="3" p="1rem" py="1.5rem">
            <VStack
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              w="full"
              h="full"
              p="1rem"
              alignItems={"center"}
              justifyContent={"center"}
              
              spacing={["0.5rem","0.5rem","1rem","1rem","2rem"]}
              
            >
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name" color="black" fontSize={['0.8rem','1rem']}>
                  Full name
                </FormLabel>
                <Input
                  color="gray.900"
                  id="name"
                  variant={"flushed"}
                  type="text"
                  borderBottom='2px solid gray'
                  {...register("name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.phone}>
                <FormLabel htmlFor="phone" color="black" fontSize={['0.8rem','1rem']}>
                  Phone Number
                </FormLabel>
                <Input
                  id="phone"
                  color="gray.900"
                  variant={"flushed"}
                  type="number"
                  borderBottom='2px solid gray'
                  {...register("phone", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: "Phone number must be in correct format",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email" color="black" fontSize={['0.8rem','1rem']}>
                  Email
                </FormLabel>
                <Input
                  color="gray.900"
                  id="email"
                  variant={"flushed"}
                  type="email"
                  borderBottom='2px solid gray'
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Email address must be a valid address",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.msg}>
                <FormLabel htmlFor="msg" color="black" fontSize={['0.8rem','1rem']}>
                  Message
                </FormLabel>
                <Input
                  color="gray.900"
                  variant={"flushed"}
                  id="msg"
                  type="text"
                  borderBottom='2px solid gray'
                  {...register("msg", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.msg && errors.msg.message}
                </FormErrorMessage>
              </FormControl>
              <Btn form={true} isLoading={isSubmitting}>Submit</Btn>
            </VStack>
          </VStack>
        </Flex>
      </Center>
    </VStack>
  );
}
