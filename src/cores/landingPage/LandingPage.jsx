import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Text, } from "@chakra-ui/react";
import Options from "./Options";

import Books from "./Books";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Box
        display="flex"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        paddingLeft="40px"
        paddingRight="40px"
      >
        <Text as="b" fontSize="50px" textAlign="center" marginTop="30px">
          ¡Bienvenidos al primer diccionario digital de la literatura del estado
          Bolívar!
        </Text>
        <Books/>
        <Text marginTop="20px" fontSize="25px" as="u">Explora todo lo que el diccionario tiene para ofrecerte...</Text>
        <Options/>

      </Box>
    </div>
  );
}

export default LandingPage;
