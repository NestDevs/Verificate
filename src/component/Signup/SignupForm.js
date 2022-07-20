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
import { signUp } from "../../api/calls";
import {Routes, Route, useNavigate} from 'react-router-dom';
export default function SignupForm({ setUserEmail, modalMethod }) {
  const initialState = {
    email: "",
    password: "",
    skill: "",
    level: "",
  };
  const { user, setUser } = useContext(AppContext);

  const { onChange, values, setValues } = useForm(initialState);
  const [error, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { email, password, first_name, last_name, skill, level } = values;


  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("Working");
    const values = { email, first_name, last_name, password, skill, level };
    console.log(values)
   
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
        linked_in:"https://www.linkedin.com/in/abdullah-ajibade-678590173/"
      }
    const signUpResponse  = await signUp(data)
    console.log(signUpResponse)
    if(!signUpResponse.status){
      setErrors({
        email:signUpResponse.error
      })
    }else{
      const { access_token}=  signUpResponse

localStorage.setItem("token", access_token)
navigate('/signIn');
    }

  

      // modalMethod();
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
            Create Profile
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
            <FormControl id="first_name" isRequired isInvalid={error.first_name}>
              <FormLabel>First Name</FormLabel>
              <InputGroup>
                <Input
                type="text"
                  name="first_name"
                  value={first_name}
                  onChange={onChange}
                />
               
              </InputGroup>
              {error.first_name && (
                <FormErrorMessage>{error.first_name}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="first_name" isRequired isInvalid={error.last_name}>
              <FormLabel>Last Name</FormLabel>
              <InputGroup>
                <Input
                type="text"
                  name="last_name"
                  value={last_name}
                  onChange={onChange}
                />
               
              </InputGroup>
              {error.last_name && (
                <FormErrorMessage>{error.last_name}</FormErrorMessage>
              )}
            </FormControl>
            <HStack>
              <Box w="50%">
                {/* <FormControl id="skill" isRequired isInvalid={error.skill}>
                  <FormLabel>Skill</FormLabel>
                  <Select
                    placeholder="Python"
                    size="md"
                    name="skill"
                    onChange={onChange}
                    value={skill}
                    multiple={false}
                  >
                    <option value="python"> Python</option>
                    <option value="php">PHP</option>
                    <option value="javascript">JavaScript</option>
                    <option value="javascript">Solidity</option>
                    <option value="javascript">React</option>
                  </Select>
                  {error.skill && (
                    <FormErrorMessage>{error.skill}</FormErrorMessage>
                  )}
                </FormControl> */}
              </Box>
              <Box w="50%">
                {/* <FormControl id="level" isRequired isInvalid={error.level}>
                  <FormLabel>Level</FormLabel>
                  <Select
                    placeholder="Beginner"
                    size="md"
                    name="level"
                    onChange={onChange}
                    value={level}
                    multiple={false}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advance">Advanced</option>
                  </Select>
                  {error.level && (
                    <FormErrorMessage>{error.level}</FormErrorMessage>
                  )}
                </FormControl> */}
              </Box>
            </HStack>
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
                Already have an account?{" "}
                <Link color={"03064A"} fontWeight={"bold"}>
                  <RouteLink to="/signin">Login</RouteLink>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
