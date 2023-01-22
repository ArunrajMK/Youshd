// import React, { useState } from 'react'
// import 'react-phone-number-input/style.css'

// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

// function Login() {
  
//   const [value, setValue] = useState()
//   return (
//     <div>
  
//       </div>
//   )
// }

// export default Login



import {
    Button,
  
    Center,
  
    Flex,
    FormControl,
    Heading,
  
    HStack,
  
    Stack,
  
    useColorModeValue,
   
  } from '@chakra-ui/react';
  import 'react-phone-number-input/style.css'
  import "./login.css"
  import 'react-phone-number-input/style.css'
  import PhoneInput from 'react-phone-number-input'
  import { PinInput, PinInputField } from '@chakra-ui/react';
  import { useState } from 'react';
  
  
  export default function Otp(){
    const [value, setValue] = useState()
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
  
  
  
          <Heading marginBottom={"20px"} display={"inline"} lineHeight={1.1} fontSize={{ base: '2xl', md: '2xl' }}>
          Please enter varification code send on 7356230040
          </Heading>
          <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
         
          <Stack  >
            <Flex marginTop={"340px"} gap={"10px"}>
          <Button  height={"60px"}>
            ←
            </Button>
            <Button
            disabled
            height={"60px"}
              bg={'black'}
              width={"300px"}
              color={'white'}
              _hover={{
                bg: 'brown.500',
              }}>
             Continue
            </Button>
            </Flex>
           
          </Stack>
        </Stack>
      </Flex>
    );
  }