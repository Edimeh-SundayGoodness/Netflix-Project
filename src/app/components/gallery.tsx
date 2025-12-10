"use client";

import { 
    Box, 
    HStack, 
    IconButton, 
    Icon,
    Image, 
    useBreakpointValue
} from "@chakra-ui/react";
import React from "react";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ScrollGallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const imagesPerClick = useBreakpointValue({
        base: 2,
        md: 4 
    })?? 2;

    const imageWidth = useBreakpointValue({
        base: 100,
        md: 200
    }) ?? 180;

    const spacing = 50;

    const scroll = (direction: "left" | "right") => {
        const { current } = scrollRef;
        if (current) {
        const scrollAmount =
            (direction === "left" ? -1 : 1) * (imageWidth + spacing ) * imagesPerClick;
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const images = [
        "image1.webp",
        "image2.webp",
        "image3.webp",
        "image4.webp",
        "image5.webp",
        "image6.webp",
        "image7.webp",
        "image8.webp",
        "image9.webp",
        "image10.webp",
    ];

    return(
        <Box
            position="relative"
            w={{base:"17em", md:"65em"}}
            p={4}
            bg="black"
            color="white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            transition="all 0.3s ease"  
            justifySelf="center"         
        >
            <IconButton
                aria-label="Scroll Left"
                position="absolute"
                top="50%"
                left="2"
                h="50px"
                transform="translateY(-50%)"
                zIndex={2}
                onClick={() => scroll("left")}
                bg="rgba(0,0,0,0.6)"
                _hover={{ bg: "rgba(255,255,255,0.2)" }}
                opacity={hovered ? 1 : 0}
                transition="opacity 0.3s ease"
            >
                <FaChevronLeft/>
            </IconButton>
            <HStack
                ref={scrollRef}
                gap="4"
                overflowX="auto"
                scrollBehavior="smooth"
                css={{
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                }}
            >
                {images.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`image-${i}`}
                        objectFit="cover"
                        borderRadius="xl"
                        flex="0 0 auto"
                        w={{ base: "150px", md: "200px" }}
                        h={{base:"180px", md:"280px"}}
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }}
                    />
                ))}
            </HStack>
            <IconButton
                aria-label="Scroll Right"
                position="absolute"
                top="50%"
                right="2"
                transform="translateY(-50%)"
                zIndex={2}
                h="50px"
                onClick={() => scroll("right")}
                bg="rgba(0,0,0,0.6)"
                _hover={{ bg: "rgba(255,255,255,0.2)" }}
                opacity={hovered ? 1 : 0}
                transition="opacity 0.3s ease"
            >
                <FaChevronRight />
            </IconButton>
        </Box>
    )
}

export default ScrollGallery