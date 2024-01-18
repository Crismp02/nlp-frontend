import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logonlp from '../images/logonlp.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box backgroundColor="#EAEAEA" width="100vw" height="50" display="flex" alignItems="center" justifyContent="space-between">
        <Link to="/">
        <Image src={Logonlp} alt="Logo" height="40px"/>
        </Link>
        <Box paddingRight="20px" display="flex" alignItems="center" justifyContent="space-between" width="auto" color="#002480" as='b'>
            <Link to="/summary">
            <Text marginRight="40px">Resúmenes</Text>
            </Link>
            <Link to="/simpleSearch">
            <Text>Búsquedas simples</Text>
            </Link>
        </Box>
    </Box>
  )
}

export default Navbar