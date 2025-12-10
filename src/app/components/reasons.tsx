"use client";

import { 
    Box, 
    Text, 
    Stack,
    IconButton
} from "@chakra-ui/react";
import { FaTv } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { SiOpentelemetry } from "react-icons/si";
import { RiChatSmileFill } from "react-icons/ri";

const Reasons = () => {
    const more = [
        {
            heading: "Enjoy on your Tv",
            description: "Watch on smart TVs, Playstations, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            icon: <FaTv />
        },
        {
            heading:"Dowload your shows to watch offline",
            description:"Save your favorites easily and always have something to watch.",
            icon: <IoArrowDownCircleOutline /> 
        },
        {
            heading:"Watch everywhere",
            description:"Stream unlimited movies and TV shows on your phone, tablets, laptop and TV.",
            icon: <SiOpentelemetry />
  
        },
        {
            heading:"Create Profiles for kids",
            description:"Send kids on adventure with their favorite characters in a space made just for them --- free with your membership.",
            icon: <RiChatSmileFill />  
        }
    ]

    return(
        <Box>
            <Text 
                fontSize={{base:"130%", md:"2xl"}}
                ml={{base:"1em", lg:"6.5em"}}
                mt={{base:"1em", lg:"2.5em"}}
            >
                More Reasons to Join
            </Text>
            <Stack
                w={{base:"16em", lg:"65em"}}
                h={{base:"auto", lg:"20em"}}
                justifySelf="center" 
                direction={{base:"column", lg:"row"}}
                mt={{base:"1em", lg:"1em"}}
                // mb="3em"
            >
                {more.map((more, index) => (
                    <Box
                        key={index}
                        borderRadius="xl"
                        w={{base:"16em", lg:"25em"}}
                        h={{base:"13em", lg:"20em"}}
                        color="white"
                        ml="auto"
                        mr="auto"
                        justifySelf="center"
                        bgGradient="linear(to-r, #060120ff, #61033aff)"
                        bgColor="#060120ff"
                        p={{base:"1em", lg:"1em"}}
                    >
                        <Text 
                            fontSize={{base:"130%", md:"2xl"}}
                            fontWeight="bolder"
                        >
                            {more.heading}
                        </Text>
                        <Text 
                            fontSize="100%"
                            color="gray.300"
                            mt={{base:"0", lg:"1em"}}
                        >
                            {more.description}
                        </Text>
                        <IconButton 
                            bg="none"
                            fontSize="300%"
                            // mb="auto"
                        >
                            {more.icon}
                        </IconButton>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

export default Reasons