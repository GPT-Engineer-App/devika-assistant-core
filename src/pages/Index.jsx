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
        <Text>
          The Agent Core orchestrates the AI planning, reasoning, and execution process, communicating with various sub-agents. Here's how it works:
          <br />
          <br />
          When a user provides a high-level prompt, the execute method is invoked on the Agent. The prompt is first passed to the Planner agent to generate a step-by-step plan. The Researcher agent then takes this plan and extracts relevant search queries and context. The Agent performs web searches using Bing Search API and crawls the top results. The raw crawled content is passed through the Formatter agent to extract clean, relevant information. This researched context, along with the step-by-step plan, is fed to the Coder agent to generate code. The generated code is saved to the project directory on disk.
          <br />
          <br />
          If the user interacts further with a follow-up prompt, the subsequent_execute method is invoked. The Action agent determines the appropriate action to take based on the user's message (run code, deploy, write tests, add feature, fix bug, write report etc.) The corresponding specialized agent is invoked to perform the action (Runner, Feature, Patcher, Reporter). Results are communicated back to the user and the project files are updated.
          <br />
          <br />
          Throughout this process, the Agent Core is responsible for:
          <ul>
            <li>Managing conversation history and project-specific context</li>
            <li>Updating agent state and internal monologue</li>
            <li>Accumulating context keywords across agent prompts</li>
            <li>Emulating the "thinking" process of the AI through timed agent state updates</li>
            <li>Handling special commands through the Decision agent (e.g., git clone, browser interaction session)</li>
          </ul>
        </Text>
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
