import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex>
      <Text style={styles.title}>Private Data</Text>
    </Flex>
  );
}

const styles = {
  title: {
    fontSize: 32,
    color: "red",
  },
};
