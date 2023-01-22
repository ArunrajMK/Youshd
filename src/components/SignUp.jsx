import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Image,
    Box,
  } from '@chakra-ui/react';
  

  
  export default function SignUp(){
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

{/* https://app-staging.youshd.com/images/logo.png */}
<Box align="center">
          <Image  marginTop={"50px"} src="https://app-staging.youshd.com/images/logo.png " h="70px" w={"140px"} />
          </Box>
          <Heading display={"inline"} lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
           Shop.Post.<Text color={"green.400"} display={"inline"}>Earn.</Text>
          </Heading>
          <Box align="center">
          <Image  marginTop={"50px"} src="https://app-staging.youshd.com/images/loginDog.png" h="60px" w={"60px"} />
          </Box>
          <Stack spacing={6}>
            <Button
              bg={'black'}
              color={'white'}
              marginTop="100px"
              _hover={{
                bg: 'brown.500',
                
              }}>
             Login/Signup
            </Button>
            <Text>
                
By continuing, you agree to our YouShd Privacy Policy and Terms of service.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    );
  }