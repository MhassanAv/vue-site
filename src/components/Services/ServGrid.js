import { Box, SimpleGrid, Icon } from "@chakra-ui/react";
import Card from "./Card";
import { MdOutlineScreenShare } from "react-icons/md";
import { TbSeo, TbWriting, TbDeviceMobile } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { BsVectorPen } from "react-icons/bs";

export default function ServGrid() {
  return (
    <SimpleGrid
      columns={[1, 1, 2, 3]}
      gap={["1rem", "1rem", "2rem"]}
      w="full"
      placeItems={"center"}
    >
      <Box w="full">
        <Card
          title={"Full Stack Web Development"}
          icon={
            <>
              <Icon
                as={FaCode}
                boxSize={["2rem", "3rem", "4.5rem"]}
                color="sec"
              />
            </>
          }
          corner={"lt"}
        />
      </Box>
      <Box w="full">
        <Card
          title={"Graphic Design"}
          icon={
            <>
              <Icon
                as={BsVectorPen}
                boxSize={["2rem", "3rem", "4.5rem"]}
                color="sec"
              />
            </>
          }
        />
      </Box>
      <Box w="full">
        <Card
          title={"Digital Marketing & SEO"}
          icon={
            <Icon as={TbSeo} boxSize={["2rem", "3rem", "4.5rem"]} color="sec" />
          }
          corner={"rt"}
        />
      </Box>
      <Box w="full">
        <Card
          title={"Branding"}
          icon={
            <Icon
              as={MdOutlineScreenShare}
              boxSize={["2rem", "3rem", "4.5rem"]}
              color="sec"
            />
          }
          corner={"lb"}
        />
      </Box>
      <Box w="full">
        <Card
          title={"Copywriting"}
          icon={
            <Icon
              as={TbWriting}
              boxSize={["2rem", "3rem", "4.5rem"]}
              color="sec"
            />
          }
        />
      </Box>
      <Box w="full">
        <Card
          title={"Mobile Development"}
          icon={
            <Icon
              as={TbDeviceMobile}
              boxSize={["2rem", "3rem", "4.5rem"]}
              color="sec"
            />
          }
          corner={"rb"}
        />
      </Box>
    </SimpleGrid>
  );
}
