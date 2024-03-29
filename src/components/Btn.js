import { Button } from "@chakra-ui/react"

export default function Btn({children,onClick,form,isLoading}) {
  return (
    <Button
          rounded={"full"}
          variant={"unstyled"}
          transition={'background 0.3s ease'}
          border={'2px solid transparent'}
          h='3.5rem'
          w={['10.438rem','10.438rem','14.438rem']}
          fontSize={['1rem','1.2rem']}
          fontWeight={'500'}
          onClick={onClick}
          color={form?'bg':null}
          type={form?'submit':'button'}
          isLoading={form&&isLoading}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            transition:'background 0.3s ease',
            background:`linear-gradient(${form?'#FFFFFF, #FFFFFF':'#181818, #181818'}) padding-box,linear-gradient(to left, #743ad5, #d53a9d) border-box`
        }}
          _hover={{
            border:'none', 
            transition:'background 0.3s ease',
            bg:'linear-gradient(270deg,#743ad5, #d53a9d)'
          }}
        >
          {children}
        </Button>
  )
}
