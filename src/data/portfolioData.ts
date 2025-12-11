export const portfolioData = {
  hero: {
    name: "Sanjay R",
    title: "Full Stack Developer & Data Engineer",
    tagline: "Building intelligent solutions with modern web technologies and machine learning",
    location: "Vellore, India",
    email: "sanjayrajendiran125@gmail.com",
    phone: "+91 9442311813",
    github: "https://github.com/sanjayrajendiran",
    linkedin: "https://linkedin.com/in/sanjayrajendiran"
  },

  about: {
    description: "I'm a Computer Science student specializing in Data Science with a passion for creating impactful software solutions. With hands-on experience in full-stack development using the MERN stack, machine learning projects, and blockchain technology, I bring both technical expertise and creative problem-solving to every project. I thrive in collaborative environments and am always eager to learn new technologies and tackle complex challenges."
  },

  projects: [
    {
      title: "Music Mood Recommendation System",
      description: "Built an intelligent mood-based music recommendation engine that analyzes user emotions and sentiment to deliver personalized song suggestions. Uses BERT for natural language understanding and KMeans clustering for preference mapping.",
      techStack: ["Python", "BERT", "KMeans", "Streamlit", "NLP"],
      highlights: [
        "Emotion and sentiment analysis using BERT",
        "Interactive Streamlit interface",
        "Personalized recommendations based on detected mood"
      ]
    },
    {
      title: "Blockchain-Based Secure Health Record System",
      description: "Designed a decentralized healthcare data management system that ensures tamper-proof storage of medical records. Features secure doctor-patient access control with blockchain technology.",
      techStack: ["Solidity", "React.js", "MetaMask", "IPFS", "Ethereum"],
      highlights: [
        "Tamper-proof record storage on Ethereum blockchain",
        "Secure access control with MetaMask authentication",
        "Decentralized file storage using IPFS"
      ]
    },
    {
      title: "Airport Threat Detection System",
      description: "Developed an advanced X-ray image analysis system using Graph Cut segmentation and CNNs to identify dangerous objects in baggage screening with improved accuracy.",
      techStack: ["Python", "TensorFlow", "Keras", "Computer Vision"],
      highlights: [
        "Enhanced localization and classification accuracy",
        "Reduced false positives in automated screening",
        "Real-time threat detection capabilities"
      ]
    },
    {
      title: "Sesame Yield Prediction Platform",
      description: "Created a machine learning platform that predicts crop yields using weather data and environmental factors, helping farmers make informed decisions for better agricultural planning.",
      techStack: ["Python", "Flask", "Machine Learning", "Seaborn"],
      highlights: [
        "Weather-based yield predictions",
        "Interactive visualizations for factor analysis",
        "Data-driven agricultural insights"
      ]
    }
  ],

  skills: {
    "Languages": ["Java", "Python", "C", "C++", "JavaScript", "HTML/CSS", "SQL", "R"],
    "Frontend": ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Flask", "RESTful APIs"],
    "Databases": ["MongoDB", "MySQL", "IPFS"],
    "Cloud & DevOps": ["AWS (EC2, S3)", "Git", "Docker"],
    "Data Science & ML": ["TensorFlow", "Keras", "BERT", "NLP", "Data Visualization"],
    "Tools & Platforms": ["Selenium", "Jest", "Figma", "JIRA", "Tableau", "Power BI"],
    "Blockchain": ["Solidity", "Ethereum", "MetaMask", "Web3.js"]
  },

  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Smart Internz",
      period: "June 2024 – August 2024",
      location: "Remote",
      description: "Built a secure food ordering platform using the MERN stack with complete authentication and testing infrastructure.",
      achievements: [
        "Implemented JWT authentication and RESTful API architecture",
        "Developed responsive UI components with React",
        "Designed efficient MongoDB schemas with Mongoose ODM",
        "Integrated unit testing with Jest and end-to-end testing with Selenium",
        "Delivered a production-ready full-stack application"
      ]
    }
  ],

  education: [
    {
      degree: "Integrated MTech - Computer Science and Engineering",
      specialization: "Data Science",
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      period: "2021 – 2026",
      grade: "CGPA: 8.40/10"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "VVNKM SR SEC SCHOOL",
      location: "Vellore, Tamil Nadu",
      period: "2020 – 2021",
      grade: "88.6%"
    }
  ]
};
