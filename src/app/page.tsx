'use client';
import { Box, Text, HStack, VStack, Image, Stack, Input} from "@chakra-ui/react";
import ButtonHolder from "../../src/app/components/shared/button";
import ScrollGallery from "./components/gallery";
import Reasons from "./components/reasons";
import Questions from "./components/questions";
import Footer from "./components/footer";
 
export default function HomePage() {
  return (
    <Box>
      <Box
        position="relative"
        h={{base:"30em", lg:"45em"}}
        w={{base:"auto", lg:"auto"}}
        backgroundImage="url('https://i.pinimg.com/originals/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        {/* Black overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="black"
          opacity="0.6"
          w={{base:"auto", lg:"auto"}}
        />
          {/* Content on top of overlay */}
          <VStack
            position="relative"
            zIndex="1"
            h="100%"
          >
            <HStack 
              
            >
              <Image src={'logo.png'}
                alt='netflix logo'
                width={{base:"11em", md:"15em"}}
                mt={{base:"-1.5em"}}
                ml={{base:"-5em"}}
              />
              <Text
                bgColor="red"
                border="2px solid red"
                w="6em"
                h="2em"
                color="white"
                borderRadius="0.2em"
                textAlign="center"
                ml={{base:"2em",md:"50em"}}
                mt={{base:"-2em", md:"-3em"}}
              >
                Sign In
              </Text>
            </HStack>
            <Box
              color="white"
              textAlign="center"
              ml={{base:"0em", md:"30em"}}
              mr={{base:"0em", md:"30em"}}
              w={{base:"17em", md:"40em"}}
            >
              <Text
                fontSize={{base:"3xl", md:"6xl"}}
                fontWeight="extrabold"
                lineHeight="shorter">
                  Unlimited movies, TV shows and more
              </Text>
              <Text
                fontSize={{base:"normal", md:"2xl"}}
                fontWeight="bold"
              >
                Start at # 2500, Cancel anytime.
              </Text>
              <Text pt="2em">
                Ready to watch?, Enter your email to create or start your membership.
              </Text>
              <Stack
                mt="1em"
                direction={{base:"column", md:"row"}}
                justifySelf={{base:"center"}}
              >
                <Input 
                    w={{base:"10em", md:"18em"}}
                    h={{base:"2.5em", md:"2.5em"}}
                    fontSize="2xl"
                    placeholder="Email address" 
                  />
                  <ButtonHolder/>
              </Stack>
            </Box>
          </VStack>
        <Box/>
      </Box>
      <Box
        color="white"
        borderTop="3px solid red"
        // borderTopRadius="10%"
        borderTopRadius={{base:"5%", lg:"10%"}}
        bgColor="black"
        zIndex="2"
        position="relative"
        mt={{base:"0em", md:"-7em"}}
        h="auto"
        w={{base:"auto", lg:"auto"}}
      >
        <Text 
          fontSize={{base:"130%", md:"2xl"}}
          ml={{base:"1em", lg:"5.5em"}}
          mt={{base:"1em", lg:"2em"}}
        >
          Trending Now
        </Text>
        <ScrollGallery/>
        <Reasons/>
        <Questions/>
        <Text
          color="white"
          mt={{base:"2em", lg:"5em"}}
          textAlign="center"
          p={{base:"1em"}}
          fontSize={{base:"100%"}}
        >
            Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <Stack
          mt="1em"
          direction={{base:"column", md:"row"}}
          justifySelf={{base:"center"}}
        >
          <Input 
            w={{base:"10em", md:"28em"}}
            h={{base:"2em", md:"2.5em"}}
            fontSize="2xl"
            placeholder="Email address" 
          />
          <ButtonHolder/>
        </Stack>
        <Footer/>
      </Box>
    </Box>
  );
}
