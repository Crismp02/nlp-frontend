import React from "react";
import Navbar from "../../components/Navbar";
import {
  Box,
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

function UploadPDF() {
  return (
    <>
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
          Subir una obra
        </Text>
        <Card
          backgroundColor="#006400"
          marginTop="20px"
          width="80vw"
          borderRadius="10px"
        >
          <CardBody>
            <Text color="white" marginTop="20px" fontWeight="bold">
              {" "}
              Sube el pdf de la obra:{" "}
            </Text>
            <Input
              type="file"
              accept=".pdf"
              marginTop="10px"
              backgroundColor="white"
            />
            <Text color="white" marginTop="20px" fontWeight="bold">
              Datos:
            </Text>
            <Text color="white" marginTop="10px" fontWeight="bold">
              {" "}
              Título de la obra:{" "}
            </Text>
            <Input
              placeholder="Introduce el título de la obra"
              backgroundColor="white"
            />
            <Text color="white" marginTop="10px" fontWeight="bold">
              {" "}
              Autor:{" "}
            </Text>
            <Input
              placeholder="Introduce el nombre del autor"
              backgroundColor="white"
            />
            <Text color="white" marginTop="10px" fontWeight="bold">
              {" "}
              Género:{" "}
            </Text>
            <Input
              placeholder="Introduce el género de la obra"
              backgroundColor="white"
            />
            <Text color="white" marginTop="10px" fontWeight="bold">
              {" "}
              Año de publicación:{" "}
            </Text>
            <Input
              placeholder="Introduce el año de publicación de la obra"
              backgroundColor="white"
            />
            <Button colorScheme="green" marginTop="20px">
              Subir obra
            </Button>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}

export default UploadPDF;
