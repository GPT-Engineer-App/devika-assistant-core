// Complete the Index page component here
// Use chakra-ui
import { Box, Heading, Text, List, ListItem, Link, Container } from "@chakra-ui/react";
import { FaBrain, FaCode, FaDatabase, FaNetworkWired, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" my={10}>
        <Heading mb={4}>Devika Architecture</Heading>
        <Text fontSize="lg">An advanced AI software engineer that can understand high-level human instructions, break them down into steps, research relevant information, and write code to achieve a given objective.</Text>
      </Box>

      <Box my={10}>
        <Heading size="md" mb={2}>
          Table of Contents
        </Heading>
        <List spacing={3}>
          <ListItem>
            <Link href="#overview">Overview</Link>
          </ListItem>
          <ListItem>
            <Link href="#agent-core">Agent Core</Link>
          </ListItem>
          <ListItem>
            <Link href="#agents">Agents</Link>
          </ListItem>
          <ListItem>
            <Link href="#language-models">Language Models</Link>
          </ListItem>
          <ListItem>
            <Link href="#browser-interaction">Browser Interaction</Link>
          </ListItem>
          <ListItem>
            <Link href="#project-management">Project Management</Link>
          </ListItem>
          <ListItem>
            <Link href="#agent-state-management">Agent State Management</Link>
          </ListItem>
          <ListItem>
            <Link href="#services">Services</Link>
          </ListItem>
          <ListItem>
            <Link href="#utilities">Utilities</Link>
          </ListItem>
          <ListItem>
            <Link href="#conclusion">Conclusion</Link>
          </ListItem>
        </List>
      </Box>

      <Box id="overview" my={10}>
        <Heading size="lg" mb={4}>
          Overview
        </Heading>
        <Text>Devika consists of several key components including Agent Core, Agents, Language Models, Browser Interaction, and more, each playing a crucial role in the system's architecture.</Text>
      </Box>

      <Box id="agent-core" my={10}>
        <Heading size="lg" mb={4}>
          Agent Core
        </Heading>
        <Text>The Agent Core orchestrates the AI planning, reasoning, and execution process, communicating with various sub-agents. It manages the overall AI planning, reasoning, and execution process. This includes receiving high-level prompts from users, generating plans through the Planner agent, and coordinating with other agents like the Researcher and Coder to execute these plans. The Agent Core also handles conversation history, project-specific context, and updates the agent state and internal monologue, ensuring a seamless integration and operation of all components.</Text>
      </Box>

      <Box id="agents" my={10}>
        <Heading size="lg" mb={4}>
          Agents
        </Heading>
        <Text>Specialized sub-agents handle specific tasks like planning, research, coding, and more.</Text>
      </Box>

      <Box id="language-models" my={10}>
        <Heading size="lg" mb={4}>
          Language Models
        </Heading>
        <Text>Utilizes large language models for natural language understanding and generation.</Text>
      </Box>

      <Box id="browser-interaction" my={10}>
        <Heading size="lg" mb={4}>
          Browser Interaction
        </Heading>
        <Text>Enables web browsing, information gathering, and interaction with web elements.</Text>
      </Box>

      <Box id="project-management" my={10}>
        <Heading size="lg" mb={4}>
          Project Management
        </Heading>
        <Text>Handles organization and persistence of project-related data.</Text>
      </Box>

      <Box id="agent-state-management" my={10}>
        <Heading size="lg" mb={4}>
          Agent State Management
        </Heading>
        <Text>Tracks and persists the dynamic state of the AI agent across interactions.</Text>
      </Box>

      <Box id="services" my={10}>
        <Heading size="lg" mb={4}>
          Services
        </Heading>
        <Text>Integrations with external services like GitHub, Netlify for enhanced capabilities.</Text>
      </Box>

      <Box id="utilities" my={10}>
        <Heading size="lg" mb={4}>
          Utilities
        </Heading>
        <Text>Supporting modules for configuration, logging, vector search, PDF generation, etc.</Text>
      </Box>

      <Box id="conclusion" my={10}>
        <Heading size="lg" mb={4}>
          Conclusion
        </Heading>
        <Text>Devika is a complex system that combines multiple AI and automation techniques to deliver an intelligent programming assistant.</Text>
      </Box>
    </Container>
  );
};

export default Index;
