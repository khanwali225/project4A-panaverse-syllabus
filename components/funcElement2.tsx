import Link from "next/link";
import Image from "next/image";
import { Box, Card, CardBody, Stack, Heading, Flex, Grid, Text} from "@chakra-ui/react"

interface StateElements {
    title2: string;
    imageUrl2: string;
    imageAlt2: string;
}
function CardsToDisplay2 (props: StateElements) {
    const { title2, imageUrl2, imageAlt2 } = props;
    return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
             src= {imageUrl2}
             alt= {imageAlt2}
             width= {500}
             height= {500}
           />
          <Stack mt='6' spacing='3'>
          <Heading size='md'>{title2}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

const CoreQuarter2 = [{
    title2: "Web 3.0 (Blockchain) and Metaverse Specialization",
    imagePath2: "/image/blockchain.png",
    imageAlt2: "",
    url2: "/"
},
{
    title2: "Artificial Intelligence (AI) and Deep Learning Specialization",
    imagePath2: "/image/ai.jpg",
    imageAlt2: "",
    url2: "/"
},
{
    title2: "Cloud-Native Computing Specialization",
    imagePath2: "/image/cnc.jpg",
    imageAlt2: "",
    url2: "/"
},
{
    title2: "Ambient Computing and IoT Specialization",
    imagePath2: "/image/amb.jpg",
    imageAlt2: "",
    url2: "/"
},{
    title2: "Genomics and Bioinformatics Specialization",
    imagePath2: "/image/genomic.jpg",
    imageAlt2: "",
    url2: "/"
},
{
    title2: "Network Programmability and Automation Specialization",
    imagePath2: "/image/network.png",
    imageAlt2: "",
    url2: "/"
}];


export default function SpecializedTracks() {
    return (
     <>
        <Flex
        flexDir={{base: "column", md: "row"}}
        align= "center"
        alignContent={"center"}
        maxW= "1440px"
        mx= "auto"
        pt= {{ base: "5", md: "10"}}
        px= {{ base: "10", md: "20" }}
        >
          <Box
          mx="auto" pt="5" pb="10" textAlign={"center"}>
            <Heading>
            Specialized Tracks:
            </Heading>
            <text>
            After completing the first three quarters the participants will select 
            one or more specializations consisting of two courses each:
            </text>
        

         <Grid
         templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)"
         }}
         gap={6}
         mx="auto"
         maxW={"8xl"}
         >
            {CoreQuarter2.map((elm2 =>
               <Link href={elm2.url2}>
                <CardsToDisplay2
                imageAlt2 = {elm2.imageAlt2}
                imageUrl2 = {elm2.imagePath2}
                title2 = {elm2.title2}
                />
               </Link>

            ))}
         </Grid>
         </Box>
         </Flex>

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
            The Outcome for Participants of the Program:
            </Text>
            <Text>
            The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences,
            and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to 
            start off by offering services at a rate of $50 per hour ($96,000 per year).This would give Pakistani 
            professionals and students a fantastic opportunity to better their financial situation while also 
            giving the economy a much-needed boost by expanding software exports.
            </Text>
          </Box>
          <Box 
          as="section" 
          order={{ base: 2, md: 2}} 
          flex = "1"
          >
          <Box
          maxW = {{ base: "150px", md: "70%", lg: "70%"}}
          mx = {{ base: "0", md: "auto"}}
          minW = "150px"
          >
            <Image
             src="/image/doller.jpg"
             width={500}
             height={500}
             alt=""
             />
          </Box>
          </Box>
        </Flex>

     </>
    )
    
}