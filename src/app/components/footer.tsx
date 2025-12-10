"use client";

import { 
    Text, 
    Box,
    Table, 
    HStack
} from "@chakra-ui/react";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"


const Footer = () => {
    const links = [
        {
            first:"FAQ",
            second:"Help Center",
            third:"Account",
            fourth:"Media Center"
        },
        {
            first:"Investor Relations",
            second:"Jobs",
            third:"Way to Watch",
            fourth:"Terms of Use"
        },
        {
            first:"Privacy",
            second:"Cookie Prefrence",
            third:"Corporate Information",
            fourth:"Contact Us"
        },
        {
            first:"Speed Test",
            second:"Legal Notices",
            third:"Only on Netflix"
        }
    ],
    secondlinks = [
        "FAQ",
        "Help Center",
        "Account",
        "Media Center",
        "Investor Relations",
        "Jobs",
        "Way to Watch",
        "Terms of Use",
        "Privacy",
        "Cookie Prefrence",
        "Corporate Information",
        "Contact Us",
        "Speed Test",
        "Legal Notices",
        "Only on Netflix"
    ]
    return(
        <Box
            color="gray.300"
            mt="3em"
            // mb="10em"
            mb={{base:"20em", lg:"10em"}}
            justifySelf="center"
            border="2px hidden gray"
            w={{base:"14em", md:"69em"}}
            h="20em"
            mr={{base:"auto"}}
            ml={{base:"auto"}}
        >
            <Text mb="2em"  textDecorationLine="underline">
                Questions? Contact Us.
            </Text>
            <Box display={{base:"none", lg:"block"}}>
                <Table.Root
                    bgColor="black"
                >
                    <Table.Body>
                        {links.map((link) => (
                        <Table.Row bgColor="black" textDecorationLine="underline">
                            <Table.Cell border="none">{link.first}</Table.Cell>
                            <Table.Cell border="none">{link.second}</Table.Cell>
                            <Table.Cell border="none">{link.third}</Table.Cell>
                            <Table.Cell border="none">{link.fourth}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
            <Box display={{base:"block", lg:"none"}}>
                {secondlinks.map((second) => (
                    <HStack>
                        <Text textDecoration="underline">{second}</Text>
                    </HStack>
                ))}
            </Box>
            <ButtonGroup variant="solid" attached mt="2em">
                <Button variant="solid" color="white">English</Button>
                <IconButton variant="outline">
                    <LuChevronDown />
                </IconButton>
            </ButtonGroup>
            <Box mt="2em">
                <Text fontSize="sm">Netflix Nigeria</Text>
                <HStack mt="1em">
                    <Text fontSize="sm">This page is protected by Google reCAPTCHA to ensure you ae not a bot.</Text>
                    <Text color="#593bf1ff" textDecoration="underline">Learn more.</Text>
                </HStack>
            </Box>
        </Box>
    )
}

export default Footer