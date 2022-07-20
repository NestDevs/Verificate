import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Select,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Link as RouteLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useForm from "./useForm";
import { validateSignupInfo } from "./validateForm";
import Modal from "../Modal";
import AppContext from "../../contexts/AppContext";
import { signIn } from "../../api/calls";
import { Routes, Route, useNavigate} from 'react-router-dom';
export default function SignupForm({ setUserEmail, modalMethod }) {
  const initialState = {
    email: "",
    password: "",
  };
  const { user, setUser } = useContext(AppContext);

  const { onChange, values, setValues } = useForm(initialState);
  const [error, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { email, password, skill, level } = values;


  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("Working");
    const values = { email, password, skill, level };
    // console.log(values)
   
    // setErrors(validateSignupInfo(values));
    console.log(error);
    if (Object.entries(error).length > 0) {
      console.log(error);
      return true;
    } else {
      setIsLoading(true);
      setIsSubmitted(true);
      setUserEmail(email);
      setValues(initialState);
      const data = { ...values, 
      }
    const signInResponse  = await signIn(data)
    if(!signInResponse.status){
      setErrors({
        email: signInResponse.error
      })
    }else{
      const { access_token } =  signInResponse[1]
      localStorage.setItem("token", access_token)
       navigate('/dashboard/dash');
    }
    }
  };

  return (
    <Flex
      minH={"90vh"}
      width="100%"
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box w={["95%", "80%"]} py={6}>
        <Stack align={"center"}>
          <Heading fontSize={["2xl", "4xl"]} textAlign={"center"}>
            Access Your Profile
          </Heading>
        </Stack>

        <Box
          w={"full"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          as="form"
          onSubmit={handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired isInvalid={error.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
              />
              {error.email && (
                <FormErrorMessage>{error.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isRequired isInvalid={error.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {error.password && (
                <FormErrorMessage>{error.password}</FormErrorMessage>
              )}
            </FormControl>
            
            <Center spacing={10} pt={2}>
              <Button
                px={5}
                type="submit"
                size="lg"
                rounded="full"
                width="120px"
                bg={"#03064A"}
                color={"white"}
                _hover={{
                  bg: "#ffffff",
                  color: "#03064A",
                }}
              >
                Proceed
              </Button>
            </Center>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link color={"03064A"} fontWeight={"bold"}>
                  <RouteLink to="/signup">Signup</RouteLink>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
