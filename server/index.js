import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';


app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());


const projects = [
  {
    id: "flex-freelancing",
    title: "Flex-Freelancing Platform",
    description: "A freelancing platform connecting clients and freelancers with secure authentication, project management, and collaboration features.",
    techStack: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/samdha1/Flex"
  },
  {
    id: "interquest",
    title: "InterQuest",
    description: "A secure opportunity discovery platform that helps students find internships and scholarships using matching and recommendation features.",
    techStack: ["React", "Java", "Spring Boot"],
    link: "https://github.com/samdha1/InterQuest"
  },
  {
    id: "nlp-testcase-gen",
    title: "NLP-Driven Test Case Generator",
    description: "A tool that generates test cases for software applications using Natural Language Processing techniques.",
    techStack: ["Python", "NLP"],
    link: "https://github.com/samdha1/NLP-Driven-Test-Case-Generator"
  },
  {
    id: "dsa-stack-exchange",
    title: "DSA Stack Exchange",
    description: "A platform for students to ask and answer questions related to Data Structures and Algorithms, fostering a community of learners.",
    techStack: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/samdha1/DSA-Stack-Exchange"
  }
];

const contactSubmissions = [];


app.get('/', (req, res) => {
  res.status(200).json({ status: "ok" });
});


app.get('/api/projects', (req, res) => {
  res.status(200).json(projects);
});


app.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  res.status(200).json(project);
});


app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name field is required." });
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ error: "Email field is required." });
  }
  if (!email.includes('@')) {
    return res.status(400).json({ error: "Invalid email format. Must contain '@'." });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: "Message field is required." });
  }

  const newSubmission = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  contactSubmissions.push(newSubmission);
  res.status(201).json({ message: "Submission received successfully.", submission: newSubmission });
});


app.get('/api/contact', (req, res) => {
  res.status(200).json(contactSubmissions);
});


app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({ error: "An unexpected error occurred on the server." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});