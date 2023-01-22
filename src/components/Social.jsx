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
    Box,
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

  import { PinInput, PinInputField } from '@chakra-ui/react';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  
  export default function Social(){
    const [otp, setOtp] = useState("")
    const navigate = useNavigate()
    console.log("OTP",otp)


const handleClick = ()=>{
   navigate("/instagram")
}


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
          Verify your social media accounts
          </Heading>
       <Box border={"1px solid"}   height="80px" borderRadius={"20px"} >
          <Heading  marginTop={"30px"} fontSize={"20px"}  >Instagram</Heading>
       </Box>
       <Box  border={"1px solid"}  height="80px" borderRadius={"20px"}>
       <Heading  marginTop={"30px"} fontSize={"20px"}>TikTok</Heading>
       </Box>
         
          <Stack  >
            <Flex marginTop={"200px"} gap={"10px"}>
          <Button height={"60px"}
              bg={'white'}
              border=".3px solid"
              width={"2500px"}
              color={'black'}>
          Skip for now
            </Button>
            <Button
            disabled
            height={"60px"}
              bg={'black'}
              width={"2500px"}
              color={'white'}
              _hover={{
                bg: 'brown.500',
              }}
              onClick={handleClick}
              >
             Continue
            </Button>
            </Flex>
           
          </Stack>
        </Stack>
      </Flex>
    );
  }