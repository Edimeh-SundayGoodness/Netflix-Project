"use client";

import { 
    IconButton, 
    VStack, 
    Button, 
    Text
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai"

const Questions = () =>{
    const questions = [
        "What is Netflix?",
        "How much does Netflix cost?",
        "Where can I watch it?",
        "How do I cancel?",
        "What can I watch in Netflix?",
        "Is Netflix good for kids?"
    ]

    return(
        <VStack>
            <Text 
                fontSize={{base:"130%", md:"2xl"}}
                ml={{base:"1em", lg:"-31em"}}
                mt={{base:"1em", lg:"2.5em"}}
                textAlign="left"
                mb="1em"
                pr={{base:"10px"}}
            >
                Frequently Asked Questions
            </Text>
            {questions.map((question, index) => (
                <Button
                    key={index}
                    border="2px hidden grey"
                    w={{base:"18em", lg:"75em"}}
                    h={{base:"3em", lg:"5em"}}
                    color="white"
                    bgColor="gray.800"
                    p="2em"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                        bgColor: "gray.600",
                    }}
                    ml="auto"
                    mr="auto"
                > 
                    <Text 
                        ml={{base:"0px"}} 
                        fontSize={{base:"sm", md:"2xl"}}
                    >
                        {question}
                    </Text>
                    <IconButton bg="none" fontWeight="bolder" mr={{base:"0px"}}>
                        <AiOutlinePlus />      
                    </IconButton>  
                </Button>
            ))}
        </VStack>
    )
}

export default Questions