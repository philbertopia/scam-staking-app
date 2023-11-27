import React from 'react'
import { Container, Flex, Heading } from "@chakra-ui/react"
import { ConnectWallet } from '@thirdweb-dev/react'

const Navbar = () => {
  return (
    <Container maxW={"1200px"} py={4}>
        <Flex direction={"row"} justifyContent={"space-between"}>
            <Heading>$CAM Token $taking App</Heading>
            <ConnectWallet />
        </Flex>
    </Container>
  )
}

export default Navbar