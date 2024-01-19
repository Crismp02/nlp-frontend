import React, { useEffect, useState } from "react";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getSummary, getWork } from "../../services/Works.services";
import LoadingSpinner from "../../components/LoadinSpinner";
import Navbar from "../../components/Navbar";

function WorkSummary() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState([]);
  const [work, setWork] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const data = await getSummary(id);
      const info = await getWork(id);
      console.log(info);
      setSummary(data);
      setWork(info);
      setIsLoading(false);
    };

    fetchSummary();
  }, []);
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
          Resumen de la obra
        </Text>
       
            <Card
              backgroundColor="#006400"
              marginTop="20px"
              width="80vw"
              borderRadius="10px"
            >
              <CardBody>
              {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
                <Text color="white" marginTop="20px" fontWeight="bold">
                  Obra: {work.title}
                </Text>
                <Text color="white" marginTop="20px" fontWeight="bold">
                  {work.authors && work.authors.length > 1
                    ? "Autores"
                    : "Autor"}
                  : {work.authors.join(", ")}
                </Text>
                <Text color="white" marginTop="20px" fontWeight="bold">
                  Resumen:
                </Text>
                <Box
                  borderRadius="10px"
                  width="100%"
                  backgroundColor="white"
                  marginTop="20px"
                  height="550px"
                  display="flex"
                  flexDirection="column"
                  paddingRight="20px"
                  paddingLeft="20px"
                >
                  <Text marginTop="10px" overflow="scroll">
                    {summary.summary}
                  </Text>
                </Box>
                </>
        )}
              </CardBody>
            </Card>
         
      </Box>
    </>
  );
}

export default WorkSummary;
