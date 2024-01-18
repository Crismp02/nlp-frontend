import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

function LoadingSpinner() {
  return (
    <Center  style={{flexGrow: 1}}>
      {" "}
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#002480"
        size="xl"
      />{" "}
    </Center>
  );
}

export default LoadingSpinner;