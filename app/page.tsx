'use client'
import Image from 'next/image'
import {Stack, Box, Container, Text, Flex, Button, VStack} from "@chakra-ui/react"
import CoreComponents from '@/components/funcElement'
import SpecializedTracks from '@/components/funcElement2'

export default function Headsection() {
  return (
    <>
    <Box as='main' bg = "green" color = "white" >
      <Container maxW="8xl">
        <Flex
        flexDir={{base: "column", md: "row"}}
        align= "center"
        maxW= "1440px"
        mx= "auto"
        pt= {{ base: "5", md: "10"}}
        px= {{ base: "10", md: "20" }}
        >
          <Box
          as="section"
          order={{ base: 2, md: 1 }}
          flex="1"
          textAlign={{ base: "center", md: "start"}}
          justifyContent="normal"
          pb= {{ base: "5", md: "5", lg: "10" }}
          >
            <Text fontWeight={"bold"}>
            Presidential Initiative for Artificial Intelligence & Computing (PIAIC)
            </Text>
            <Text fontWeight={{ base: "bold", md: "bold", lg: "extrabold"}} 
             fontSize={{base: "3xl", md: "3xl", lg: "5xl"}}>
            Certified Web 3.0 and Metaverse Developer
            </Text>
            <Text>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next 
            Generation of the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), 
            Cloud, Edge, Ambient Computing, Network Automation, and Bioinformatics Technologies.
            <br/>
            <br/>
            <Button 
              as="a" 
              fontSize={"sm"}
              bg = "white"
              color = "black"
              href="https://portal.piaic.org/signup" 
              rounded = "5px"
              py = "7px"
              px = "20px"       
             >
              Apply
            </Button>
            </Text>
          </Box>
          <Box 
          as="section" order={{ base: 1, md: 2}} flex = "1"
          >
          <Box
          maxW = {{ base: "150px", md: "50%", lg: "50%"}}
          mx = {{ base: "0", md: "auto"}}
          minW = "150px"
          >
            <Image
             src="/image/President.webp"
             alt="Picture of the President"
             width={2000}
             height={2000}
             />
          </Box>
          </Box>
        </Flex>
      </Container>      
      </Box>
      <Box as ="main">

     {/* section 2 */}

<Box as="section" bg="green" color="white">
      <Container maxW="8xl">
        <Flex
        flexDir={{base: "column", md: "row"}}
        align= "center"
        maxW= "1440px"
        mx= "auto"
        pt= {{ base: "5", md: "10"}}
        px= {{ base: "10", md: "20" }}
        textAlign={"center"}
        justifyContent="normal"
        bg= "pink"
        color="white"
        >
          <Box
          as="section"
          bg= "green"
          color="white"
          flex="1"
          pb= {{ base: "5", md: "5", lg: "10" }}
          >
            <Text fontWeight={"bold"}>
            The Panaverse Community and Syllabus:
            </Text>
            <Text>
            The internet is without a doubt the most important technological development in human history. 
            Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by 
            introducing novel features and advancements. Metaverse will make use of all aspects of modern 
            technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, 
            ambient computing, and more.
            <br/>
            </Text>
            <VStack  py="10">
              <Box
              maxW={{base: "150px", md: "50%"}}
              mx={{base: "0", md: "auto"}}
              minW="150px"
              >
                  <Image src="/image/metaverse.jpg"
                  width={500}
                  height={500}
                  alt=""
                  />
              </Box>
            </VStack>
            <Text>
            Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse,
            terms used to depict a future internet vision centered on decentralized technologies and virtual worlds.
            Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable 
            market of up to $13 trillion and five billion people by 2030.
            </Text>
          </Box>
          </Flex>
      </Container>
      </Box>


      {/* section 3 */}

      
      <Container maxW="8xl">
        <Flex
        flexDir={{base: "column", md: "row"}}
        align= "center"
        maxW= "1440px"
        mx= "auto"
        pt= {{ base: "5", md: "10"}}
        px= {{ base: "10", md: "20" }}
        >
          <Box
          as="section"
          order={{ base: 2, md: 2 }}
          flex="1"
          textAlign={{ base: "center", md: "start"}}
          justifyContent="normal"
          pb= {{ base: "5", md: "5", lg: "10" }}
          >
            <Text fontWeight={"bold"}>
            Program of Studies:
            </Text>
            <Text>
            This curriculum is intended for beginners who want to learn software development from the ground up. 
            The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented 
            Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long 
            hybrid program that includes both onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating students to produce projects. 
            To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) 
            on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom 
            laboratories and recorded videos.
            </Text>
          </Box>
          <Box 
          as="section" 
          order={{ base: 1, md: 1}} 
          flex = "1"
          >
          <Box
          maxW = {{ base: "150px", md: "50%", lg: "50%"}}
          mx = {{ base: "0", md: "auto"}}
          minW = "150px"
          >
            <Image
             src="/image/program.jpg"
             width={500}
             height={500}
             alt=""
             />
          </Box>
          </Box>
        </Flex>
        <CoreComponents />
        <SpecializedTracks />
      </Container>
    </Box>
    </>
  )
}