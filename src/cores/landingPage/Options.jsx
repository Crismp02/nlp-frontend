import React from "react";
import { Box, Card, CardBody, Text, Image } from "@chakra-ui/react";
import searchpln1 from "../../images/searchpln1.png";
import booknlp from "../../images/booknlp.png";
import searchnlp from "../../images/searchnlp.png";
import { Link } from "react-router-dom";

function Options() {
  return (
    <>
      <Card
        backgroundColor="#D9AD00"
        marginTop="20px"
        width="40vw"
        borderRadius="10px"
      >
        <CardBody display="flex" flexDirection="row" alignItems="center">
          <Image src={searchpln1} height="230px" marginRight="20px" />
          <Box display="flex" flexDirection="column">
            <Link to="/summary">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Text as="b" fontSize="30px" color="white">
                  Resúmenes de pdf
                </Text>
              </Box>
            </Link>
            <Text textAlign="center" color="white">
              ¿Quieres aprender más sobre la literatura del estado Bolívar? ¿No
              tienes tiempo para leer todos los libros? ¡Resúmenes de PDF es la
              solución perfecta para ti!
            </Text>
            <Text textAlign="center" marginTop="14px" color="white">
              Resúmenes de pdf te permite generar resúmenes de obras literarias
              del estado Bolívar. Nuestros resúmenes son claros, concisos y
              fáciles de entender.
            </Text>
          </Box>
        </CardBody>
      </Card>
      <Card
        backgroundColor="#006400"
        marginTop="20px"
        width="40vw"
        borderRadius="10px"
      >
        <CardBody display="flex" flexDirection="row" alignItems="center">
          <Image src={booknlp} height="230px" marginRight="20px" />
          <Box display="flex" flexDirection="column">
            <Link to="/fragmentSearch">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Text as="b" fontSize="30px" color="white">
                  Consulta por fragmento
                </Text>
              </Box>
            </Link>
            <Text textAlign="center" color="white">
              ¿No sabes de qué obra es ese fragmento que te acabas de encontrar?
              ¿No tienes tiempo para buscarlo? ¡Consulta por fragmento es la
              solución perfecta para ti!
            </Text>
            <Text textAlign="center" marginTop="14px" color="white">
              Consulta por fragmento te permite buscar obras literarias del
              estado Bolívar a partir de un fragmento. Solo tienes que
              introducir el fragmento en el campo de búsqueda y la plataforma
              buscará la obra correspondiente.
            </Text>
          </Box>
        </CardBody>
      </Card>
      <Card
        backgroundColor="#002480"
        marginTop="20px"
        width="40vw"
        borderRadius="10px"
      >
        <CardBody display="flex" flexDirection="row" alignItems="center">
          <Image src={searchnlp} height="200px" marginRight="20px" />
          <Box display="flex" flexDirection="column">
            <Link to="/simpleSearch">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Text as="b" fontSize="30px" color="white">
                  Búsquedas simples
                </Text>
              </Box>
            </Link>
            <Text textAlign="center" color="white">
              ¿Quieres encontrar información sobre obras literarias del estado
              Bolívar de forma rápida y sencilla? ¡Búsquedas simples es la
              solución perfecta para ti!
            </Text>
            <Text textAlign="center" marginTop="14px" color="white">
              Búsquedas simples te permite buscar obras literarias del estado
              Bolívar a partir de distintos parámetros. Solo tienes que
              introducir la búsqueda que deseas hacer, ya sea por título de la
              obra, autor, género, año de publicación, etc.
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default Options;
