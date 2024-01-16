import React from 'react'
import { Box, Card, CardBody, Heading, Text, Image } from "@chakra-ui/react";
import libro1 from "../../images/libro1.png";

function Books() {
  return (
    <Box
          width="85%"
          backgroundColor="#EAEAEA"
          borderRadius="10px"
          height="450px"
          marginTop="10px"
          display="flex"
          justifyContent="space-between"
          padding="30px"
        >
          <Card width="250px">
            <CardBody display="flex" flexDirection="column">
               <Image src={libro1} height="60%"/> 
              <Heading fontSize="25px" marginTop="20px" textAlign="center" color="#006400">Alquimia de los espejos</Heading>
              <Text textAlign="center">Autor: José ramón Medina</Text>
            </CardBody>
          </Card>
          <Card width="250px">
            <CardBody display="flex" flexDirection="column">
               <Image src={libro1} height="60%"/> 
              <Heading fontSize="25px" marginTop="20px" textAlign="center" color="#006400">Alquimia de los espejos</Heading>
              <Text textAlign="center">Autor: José ramón Medina</Text>
            </CardBody>
          </Card>
          <Card width="250px">
            <CardBody display="flex" flexDirection="column">
               <Image src={libro1} height="60%"/> 
              <Heading fontSize="25px" marginTop="20px" textAlign="center" color="#006400">Alquimia de los espejos</Heading>
              <Text textAlign="center">Autor: José ramón Medina</Text>
            </CardBody>
          </Card>
          <Card width="250px">
            <CardBody display="flex" flexDirection="column">
               <Image src={libro1} height="60%"/> 
              <Heading fontSize="25px" marginTop="20px" textAlign="center" color="#006400">Alquimia de los espejos</Heading>
              <Text textAlign="center">Autor: José ramón Medina</Text>
            </CardBody>
          </Card>
          <Card width="250px">
            <CardBody display="flex" flexDirection="column">
               <Image src={libro1} height="60%"/> 
              <Heading fontSize="25px" marginTop="20px" textAlign="center" color="#006400">Alquimia de los espejos</Heading>
              <Text textAlign="center">Autor: José ramón Medina</Text>
            </CardBody>
          </Card>
        </Box>
  )
}

export default Books