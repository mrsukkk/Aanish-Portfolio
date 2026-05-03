export const personalInfo = {
  name: "Aanish Patnaik",
  role: "Software Developer Engineer",
  tagline: "Building intelligent backend systems & AI/ML pipelines",
  email: "aanishpatnaik31@gmail.com",
  phone: "+91 7853927767",
  location: "Bhubaneswar, India",
  github: "https://github.com/mrsukkk",
  linkedin: "https://www.linkedin.com/in/aanishpatnaik/",
  summary:
    "1+ year of experience building production-grade FinTech backend systems and AI/ML solutions. Designed high-throughput fraud detection APIs and distributed data pipelines processing large-scale financial transactions on GCP.",
};

export const skills = [
  { name: "Python", category: "Languages" },
  { name: "FastAPI", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "YOLOv8", category: "AI / ML" },
  { name: "PyTorch", category: "AI / ML" },
  { name: "LangChain", category: "AI / ML" },
  { name: "LangGraph", category: "AI / ML" },
  { name: "LLMs", category: "AI / ML" },
  { name: "RAG", category: "AI / ML" },
  { name: "TensorRT", category: "AI / ML" },
  { name: "VectorDB", category: "AI / ML" },
  { name: "GCP", category: "Cloud" },
  { name: "BigQuery", category: "Cloud" },
  { name: "Cloud Pub/Sub", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Apache Airflow", category: "Data" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
];

export const projects = [
  {
    id: 1,
    title: "Fraud Detection & OCR Pipeline",
    subtitle: "Computer Vision · FinTech",
    description:
      "Production-grade computer vision pipeline using YOLOv8 for real-time object detection and OCR in financial document processing. Applied TensorRT quantization, reducing inference latency for edge deployment on GCP.",
    tech: ["YOLOv8", "PyTorch", "TensorRT", "GCP", "Roboflow"],
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "Distributed FinTech Data Pipeline",
    subtitle: "Data Engineering · GCP",
    description:
      "Fault-tolerant data ingestion pipeline for high-volume financial transaction analytics using Apache Airflow on GCP. Automated data lifecycle management with GCS, integrated Secret Manager and real-time Mattermost alerting.",
    tech: ["Apache Airflow", "GCP", "GCS", "BigQuery", "PostgreSQL"],
    color: "#7c3aed",
  },
  {
    id: 3,
    title: "Jira Automation LangGraph Agent",
    subtitle: "LLM Agent · Productivity",
    description:
      "LLM-powered LangGraph agent to auto-fetch Jira tickets, summarize descriptions and attachments, and generate sprint reports. Used prompt engineering and context memory management for consistent multi-turn output quality.",
    tech: ["LangGraph", "LangChain", "LLMs", "Jira API", "Python"],
    color: "#f97316",
  },
];

export const experience = [
  {
    company: "iServeU Technology Pvt. Ltd.",
    role: "Software Developer Engineer",
    period: "January 2025 – Present",
    location: "Bhubaneswar, India",
    highlights: [
      "Built production-grade CV pipelines for fraud detection in FinTech workflows",
      "Designed distributed data pipelines processing high-volume financial transactions",
      "Developed LLM agent using LangGraph for automated Jira ticket management",
      "Deployed models and pipelines on GCP with Docker and Kubernetes",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Veer Surendra Sai University of Technology (VSSUT), Burla",
  period: "2021 – 2025",
  location: "Odisha, India",
};
