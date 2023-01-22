import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    Image,
    Box,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
  

  
  export default function Earn(){
    const navigate = useNavigate()
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
         h="896px"
         w="414px"
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
         >

<Box align="center">
          <Image  marginTop={"50px"} src="https://app-staging.youshd.com/images/logo.png " h="70px" w={"140px"} />
          </Box>
         
          <Box align="center">
          <Image  marginTop={"50px"} src="https://res.cloudinary.com/dqsbiaqqj/image/upload/v1669289853/consumer/welcome/IMG-1305_1_xdvh6k.png" h="170px" w={"170px"} />
          </Box>
          <Heading display={"inline"} color="black" lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Earn.
          </Heading>
          <Heading display={"inline"} lineHeight={1.1} fontWeight="light" color={"hsl(221,8%,58%)"} fontSize={{ base: '2xl', md: '15px' }}>
          Earn unlimited cashbacks and rewards!
          </Heading>
          <Stack spacing={6}>
            <Button
            h="60px"
              bg={'black'}
              color={'white'}
              borderRadius="13px"
              marginTop="100px"
              onClick={()=>navigate("/instagram")}
              _hover={{
                bg: 'brown.500',
              
              }}>
        Continue
            </Button>
           
          </Stack>
        </Stack>
      </Flex>
    );
  }