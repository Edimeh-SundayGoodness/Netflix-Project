"use client";

import { 
    Box, 
    Text, 
    Stack
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reasons = () => {
    const more = [
        {
            heading: "Enjoy on your Tv",
            description: "Watch on smart TVs, Playstations, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            icon: <FaChevronLeft/>
        },
        {
            heading:"Dowload your shows to watch offline",
            description:"Save your favorites easily and always have something to watch.",
            icon: <FaChevronRight /> 
        },
        {
            heading:"Watch everywhere",
            description:"Stream unlimited movies and TV shows on your phone, tablets, laptop and TV.",
            icon:""  
        },
        {
            heading:"Create Profiles for kids",
            description:"Send kids on adventure with their favorite characters in a space made just for them --- free with your membership.",
            icon:""  
        }
    ]

    return(
        <Box>
            <Text 
                fontSize="2xl"
                ml={{base:"1em", lg:"6.5em"}}
                mt={{base:"1em", lg:"2.5em"}}
            >
                More Reasons to Join
            </Text>
            <Stack
                w={{base:"17em", lg:"65em"}}
                h={{base:"17em", lg:"25em"}}
                justifySelf="center" 
                direction={{base:"column", lg:"row"}}
                mt={{base:"1em", lg:"1em"}}
            >
                {more.map((more, index) => (
                    <Box
                        key={index}
                        borderRadius="xl"
                        w={{base:"17em", lg:"25em"}}
                        h={{base:"10em", lg:"20em"}}
                        color="white"
                        // gradientTo="#060120ff #61033aff "
                        bgColor="#060120ff"
                        p={{base:"1em", lg:"1em"}}
                    >
                        <Text 
                            fontSize="2xl"
                            fontWeight="bolder"
                        >
                            {more.heading}
                        </Text>
                        <Text 
                            fontSize="100%"
                            mt={{base:"0", lg:"1em"}}
                        >
                            {more.description}
                        </Text>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

export default Reasons