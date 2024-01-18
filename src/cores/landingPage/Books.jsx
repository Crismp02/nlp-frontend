import React, {useEffect, useState} from 'react'
import { Box, Card, CardBody, Heading, Text, Image, Tag } from "@chakra-ui/react";
import { getWorks } from '../../services/Works.services';
import LoadingSpinner from '../../components/LoadinSpinner';

function Books() {
  const [isLoading, setIsLoading] = useState(true);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const data = await getWorks();
      setWorks(data);
      setIsLoading(false);
    };

    fetchWorks();
  }, []);
  
  return (
    <Box
      width="89%"
      backgroundColor="#006400"
      borderRadius="10px"
      height="500px"
      marginTop="10px"
      display="flex"
      justifyContent="space-between"
      padding="30px"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : ( <>
      <Card width="250px" height="400px">
        <CardBody display="flex" flexDirection="column">
          <Box
            width="100%"
            height="80%"
            backgroundColor="#CACACA"
            borderRadius="5px"
          >
            <Heading
              fontSize="20px"
              marginTop="20px"
              textAlign="center"
              color="#002480"
            >
              {works[0]?.title}
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Text textAlign="center" marginRight="5px" as="b">
                Autor:
              </Text>
              <Text textAlign="center">{works[0]?.authors}</Text>
            </Box>
            <Tag marginTop="10px" paddingLeft="10px" paddingRight="10px">
              {works[0]?.genre}
            </Tag>
          </Box>
        </CardBody>
      </Card>
      <Card width="250px" height="400px">
        <CardBody display="flex" flexDirection="column">
          <Box
            width="100%"
            height="80%"
            backgroundColor="#CACACA"
            borderRadius="5px"
          >
            <Heading
              fontSize="20px"
              marginTop="20px"
              textAlign="center"
              color="#002480"
            >
              {works[1]?.title}
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
            <Text textAlign="center" marginRight="5px" as="b">
                Autores:
              </Text>
              <Box display="flex" flexDirection="column">
              <Text textAlign="center">{works[1]?.authors[0]},</Text>
              <Text textAlign="center">{works[1]?.authors[1]}</Text>
              </Box>
            </Box>
            <Tag marginTop="10px" paddingLeft="10px" paddingRight="10px">
              {works[1]?.genre}
            </Tag>
          </Box>
        </CardBody>
      </Card>
      <Card width="250px" height="400px">
        <CardBody display="flex" flexDirection="column">
          <Box
            width="100%"
            height="80%"
            backgroundColor="#CACACA"
            borderRadius="5px"
          >
            <Heading
              fontSize="20px"
              marginTop="20px"
              textAlign="center"
              color="#002480"
            >
              {works[2]?.title}
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
            <Text textAlign="center" marginRight="5px" as="b">
                Autores:
              </Text>
              <Box display="flex" flexDirection="column">
              <Text textAlign="center">{works[2]?.authors[0]},</Text>
              <Text textAlign="center">{works[2]?.authors[1]}</Text>
              </Box>
            </Box>
            <Tag marginTop="10px" paddingLeft="10px" paddingRight="10px">
              {works[2]?.genre}
            </Tag>
          </Box>
        </CardBody>
      </Card>
      <Card width="250px" height="400px">
        <CardBody display="flex" flexDirection="column">
          <Box
            width="100%"
            height="80%"
            backgroundColor="#CACACA"
            borderRadius="5px"
          >
            <Heading
              fontSize="20px"
              marginTop="20px"
              textAlign="center"
              color="#002480"
            >
              {works[3]?.title}
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
            <Text textAlign="center" marginRight="5px" as="b">
                Autor:
              </Text>
              <Text textAlign="center">{works[3]?.authors}</Text>
            </Box>
            <Tag marginTop="10px" paddingLeft="10px" paddingRight="10px">
              {works[3]?.genre}
            </Tag>
          </Box>
        </CardBody>
      </Card>
      <Card width="250px" height="400px">
        <CardBody display="flex" flexDirection="column">
          <Box
            width="100%"
            height="80%"
            backgroundColor="#CACACA"
            borderRadius="5px"
          >
            <Heading
              fontSize="20px"
              marginTop="20px"
              textAlign="center"
              color="#002480"
            >
              {works[4]?.title}
            </Heading>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="row" justifyContent="center">
            <Text textAlign="center" marginRight="5px" as="b">
                Autor:
              </Text>
              <Text textAlign="center">{works[4]?.authors}</Text>
            </Box>
            <Tag marginTop="10px" paddingLeft="10px" paddingRight="10px">
              {works[4]?.genre}
            </Tag>
          </Box>
        </CardBody>
      </Card>
      </>
      )}
    </Box>
  );
}

export default Books