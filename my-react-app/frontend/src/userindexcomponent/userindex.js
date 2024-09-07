import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

function Userindex() {
  const location = useLocation();
  const username = localStorage.getItem("username") || "User";

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        {`Welcome, ${username}`}
      </Heading>
      <Text fontSize="xl">User Index Page</Text>
    </Box>
  );
}

export default Userindex;
