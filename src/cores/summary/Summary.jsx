import React, {useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Box, Card, CardBody, Text } from '@chakra-ui/react'
import { getWorks } from '../../services/Works.services'
import LoadingSpinner from '../../components/LoadinSpinner'
import { Link } from 'react-router-dom'

function Summary() {
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
          <Text color="white" marginTop="20px" fontWeight="bold">
                Obras disponibles para resumir:
            </Text>
            <Box borderRadius="10px" width="100%" backgroundColor="white" marginTop="20px" height="550px" display="flex" flexDirection="column" paddingRight="20px" paddingLeft="20px">
            {isLoading ? (
        <LoadingSpinner />
      ) : ( <> 
            <Text as="b" fontSize="20px" marginTop="20px" paddingBottom="20px" borderBottom="2px" color="#002480">
  <Link to={`/summary/${works[0]?.id}`}>
    {works[0]?.title}
  </Link>
</Text>
<Text as="b" fontSize="20px" marginTop="20px" paddingBottom="20px" borderBottom="2px" color="#002480">
  <Link to={`/summary/${works[1]?.id}`}>
    {works[1]?.title}
  </Link>
</Text>
<Text as="b" fontSize="20px" marginTop="20px" paddingBottom="20px" borderBottom="2px" color="#002480">
  <Link to={`/summary/${works[2]?.id}`}>
    {works[2]?.title}
  </Link>
</Text>
<Text as="b" fontSize="20px" marginTop="20px" paddingBottom="20px" borderBottom="2px" color="#002480">
  <Link to={`/summary/${works[3]?.id}`}>
    {works[3]?.title}
  </Link>
</Text>
<Text as="b" fontSize="20px" marginTop="20px" paddingBottom="20px" borderBottom="2px" color="#002480">
  <Link to={`/summary/${works[3]?.id}`}>
    {works[4]?.title}
  </Link>
</Text>
</>)}
            </Box>
          </CardBody>
        </Card>
     
      </Box>
    </>
  );
}

export default Summary