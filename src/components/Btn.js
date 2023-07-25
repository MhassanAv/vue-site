import { Button } from "@chakra-ui/react"

export default function Btn({children,onClick}) {
  return (
    <Button
          rounded={"full"}
          variant={"unstyled"}
          transition={'all 0.3s ease'}
          border={'3px solid transparent'}
          h='3.5rem'
          w={['10.438rem','10.438rem','14.438rem']}
          fontSize={['1rem','1.2rem']}
          fontWeight={'500'}
          onClick={onClick}
          sx={{
            background:'linear-gradient(#181818, #181818) padding-box,linear-gradient(to left, #743ad5, #d53a9d) border-box', 
        }}
          _hover={{
            border:'none', 
            bgGradient:'linear-gradient(to-l, #743ad5, #d53a9d)',
            transform:'scale(1.05)',
          }}
        >
          {children}
        </Button>
  )
}
