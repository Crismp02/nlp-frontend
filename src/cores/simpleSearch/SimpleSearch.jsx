import React, { useState, useEffect } from "react";
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
import { SearchIcon } from "@chakra-ui/icons";
import { searchWork } from "../../services/Works.services";
import LoadingSpinner from "../../components/LoadinSpinner";

function SimpleSearch() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [work, setWork] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const fetchSearch = async () => {
    if (search !== "") {
      setIsLoading(true);
      const data = await searchWork(search);
      setWork(data);
      setIsLoading(false);
    }
    setSearchClicked(true);
  };

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
          Búsquedas simples
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
                placeholder="Buscar"
                backgroundColor="white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
            <Button
              marginTop="20px"
              backgroundColor="#002480"
              color="white"
              onClick={fetchSearch}
            >
              Buscar
            </Button>
            <Text color="white" marginTop="20px" fontWeight="bold">
              Resultados:
            </Text>
            {isLoading ? (
  <LoadingSpinner />
) : searchClicked ? (
  search === "" ? (
    <Box
                  borderRadius="10px"
                  width="100%"
                  backgroundColor="white"
                  marginTop="20px"
                  height="550px"
                  display="flex"
                  flexDirection="column"
                  paddingLeft="20px"
                  paddingTop="30px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text marginTop="20px" as="i">
                    Realiza una búsqueda
                  </Text>
                </Box>
  ) : work.length === 0 ? (
    <Box
                  borderRadius="10px"
                  width="100%"
                  backgroundColor="white"
                  marginTop="20px"
                  height="550px"
                  display="flex"
                  flexDirection="column"
                  paddingLeft="20px"
                  paddingTop="30px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text marginTop="20px" as="i">
                    No se encontraron resultados
                  </Text>
                </Box>
  ) : (
    work.map((item, index) => (
      <React.Fragment key={index}>
        <Box
          borderRadius="10px"
          width="100%"
          backgroundColor="white"
          marginTop="20px"
          display="flex"
          flexDirection="column"
          paddingLeft="20px"
          paddingY="30px"
        >
          <Box display="flex" flexDirection="row">
            <Text
              as="b"
              fontSize="20px"
              color="#002480"
              marginRight="10px"
            >
              Obra:
            </Text>
            <Text fontSize="20px">{item.title}</Text>
          </Box>
          <Box display="flex" flexDirection="row">
            <Text
              as="b"
              fontSize="20px"
              color="#002480"
              marginRight="10px"
            >
              {item.authors && item.authors.length > 1
                ? "Autores"
                : "Autor"}
              :
            </Text>
            <Text fontSize="20px">{item.authors.join(", ")}</Text>
          </Box>
          <Box display="flex" flexDirection="row">
            <Text
              as="b"
              fontSize="20px"
              color="#002480"
              marginRight="10px"
            >
              Género:
            </Text>
            <Text fontSize="20px">{item.genre}</Text>
          </Box>
          <Box display="flex" flexDirection="row">
            <Text
              as="b"
              fontSize="20px"
              color="#002480"
              marginRight="10px"
            >
              Descripción:
            </Text>
            <Text fontSize="20px">
    {item.description === "" ? "No está disponible" : item.description}
  </Text>
          </Box>
          <Box display="flex" flexDirection="row">
            <Text
              as="b"
              fontSize="20px"
              color="#002480"
              marginRight="10px"
            >
              Idioma original:
            </Text>
            <Text fontSize="20px">{item.original_language}</Text>
          </Box>
        </Box>
      </React.Fragment>
    ))
  )
) : null}
          </CardBody>
        </Card>
      </Box>
    </>
  );
}

export default SimpleSearch;
