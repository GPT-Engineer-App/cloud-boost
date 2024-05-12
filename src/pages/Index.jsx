import { Box, Button, Container, Flex, Heading, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket, FaUsers, FaLayerGroup } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Flex alignItems="center" justifyContent="space-between" px={8}>
          <Heading as="h1" size="lg">SaaS Company</Heading>
          <Stack direction="row" spacing={4}>
            <Button variant="ghost" colorScheme="whiteAlpha">Home</Button>
            <Button variant="ghost" colorScheme="whiteAlpha">Features</Button>
            <Button variant="ghost" colorScheme="whiteAlpha">Pricing</Button>
            <Button variant="ghost" colorScheme="whiteAlpha">Contact</Button>
          </Stack>
        </Flex>
      </Box>
      <Flex alignItems="center" justifyContent="center" bg="brand.700" color="white" py={20}>
        <VStack spacing={4}>
          <Heading as="h2" size="2xl">Innovate with Confidence</Heading>
          <Text fontSize="xl">Empower your team with our cutting-edge solutions.</Text>
          <Button size="lg" colorScheme="blue">Get Started</Button>
        </VStack>
      </Flex>
      <Box py={10}>
        <VStack spacing={8}>
          <Heading as="h3" size="lg" textAlign="center">Features</Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
            <Feature icon={FaRocket} title="Speed" description="Accelerate your workflows with high velocity." />
            <Feature icon={FaLayerGroup} title="Integration" description="Seamlessly connect with multiple platforms." />
            <Feature icon={FaUsers} title="Collaboration" description="Enhance team productivity with collaborative tools." />
          </Stack>
        </VStack>
      </Box>
      <Box bg="gray.100" py={10}>
        <VStack spacing={8}>
          <Heading as="h3" size="lg" textAlign="center">Testimonials</Heading>
          <Text px={8}>"This software revolutionized our business processes and increased our productivity!" - CEO of TechCorp</Text>
          <Text px={8}>"A must-have tool for any tech-driven company looking to scale." - CTO of InnovateX</Text>
        </VStack>
      </Box>
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Flex justifyContent="center" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} SaaS Company. All rights reserved.</Text>
        </Flex>
      </Box>
    </Container>
  );
};

const Feature = ({ icon, title, description }) => (
  <VStack>
    <Icon as={icon} w={10} h={10} />
    <Text fontWeight="bold">{title}</Text>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

export default Index;