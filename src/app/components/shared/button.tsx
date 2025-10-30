'use client';
import { Box, Text } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";

const ButtonHolder = () =>{
    return(
        <Box
            bgColor="red"
            border="2px solid red"
            w="11em"
            h="4em"
            color="white"
            borderRadius="0.3em"
            textAlign="center"
            pt="0.7em"
        >
            <Text fontSize="2xl">Get Started</Text>
        </Box>
    )
}
export default ButtonHolder
