import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Login() {
  const [show, setShow] = useState<Boolean>(false);
  const router = useRouter();
  const handleClick = () => setShow(!show);

  const handleLoginButtonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <Flex justify={"center"} marginTop="8rem">
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md" marginBottom={4}>
              Login
            </Heading>
            <Input placeholder="Email" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="2.5rem">
                {show ? (
                  <AiOutlineEye onClick={handleClick} cursor="pointer">
                    {show ? "Hide" : "Show"}
                  </AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible onClick={handleClick} cursor="pointer">
                    {show ? "Hide" : "Show"}
                  </AiOutlineEyeInvisible>
                )}
              </InputRightElement>
            </InputGroup>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleLoginButtonClick}
            >
              Login
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Forgot Password
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
}
