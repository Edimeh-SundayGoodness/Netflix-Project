'use client';
import { Box, Text, Center } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";

const ButtonHolder = () =>{
    return(
        <Center>
            <Box
                bgColor="red"
                border="2px solid red"
                w={{base:"10em", lg:"11em"}}
                h={{base:"3em", lg:"4em"}}
                color="white"
                borderRadius="0.3em"
                textAlign="center"
                pt={{base:"0.2em", lg:"0.7em"}}
            >
                <Text fontSize="2xl">Get Started</Text>
            </Box>
        </Center>
    )
}
export default ButtonHolder
