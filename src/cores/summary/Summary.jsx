import React from 'react'
import Navbar from '../../components/Navbar'
import { Box, Button, Card, CardBody, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function Summary() {
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
          Resúmenes de pdf
        </Text>
        <Card
          backgroundColor="#006400"
          marginTop="20px"
          width="80vw"
          borderRadius="10px"
        >
          <CardBody>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                placeholder="Introduce el título de la obra para buscar su resumen"
                backgroundColor="white"
              />
            </InputGroup>
            <Button marginTop="20px" backgroundColor="#002480" color="white">Buscar</Button>
            <Text color="white" marginTop="20px" fontWeight="bold">
                Resultados:
            </Text>
            <Box borderRadius="10px" width="100%" backgroundColor="white" marginTop="20px" height="550px" display="flex" justifyContent="center" alignItems="center">
                Aquí se muestran los resultados de la búsqueda
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}

export default Summary