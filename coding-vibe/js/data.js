// ============================================================
// Coding_Vibe — content data
// Expanded with rich interactive content, roadmaps, and details.
// ============================================================

const SKILLS = [
  { 
    name: "Python", 
    icon: "code",
    difficulty: "Easy",
    time: "3-4 weeks",
    useCases: "Scripting, Web Dev (Django/FastAPI), AI/ML, Automation",
    desc: "The most popular language for beginners, automation, and AI. Known for its clean syntax.",
    snippet: "def greet(name):\n    return f'Hello, {name}!'\nprint(greet('Learner'))",
    resource: "https://docs.python.org/3/tutorial/"
  },
  { 
    name: "Java", 
    icon: "code",
    difficulty: "Medium",
    time: "6-8 weeks",
    useCases: "Enterprise Software, Android Apps, Backend Systems",
    desc: "A class-based, object-oriented programming language designed for portability and reliability.",
    snippet: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}",
    resource: "https://dev.java/learn/"
  },
  { 
    name: "HTML", 
    icon: "layout",
    difficulty: "Easy",
    time: "1 week",
    useCases: "Web Page Structure, SEO, Accessibility",
    desc: "HyperText Markup Language. The skeleton of every website on the internet.",
    snippet: "<article>\n  <h1>Learning HTML</h1>\n  <p>Tags structure content.</p>\n</article>",
    resource: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  { 
    name: "CSS", 
    icon: "layout",
    difficulty: "Easy to Medium",
    time: "2 weeks",
    useCases: "Layouts, Web Styling, Animations, Responsiveness",
    desc: "Cascading Style Sheets. Controls how HTML elements look, layout, and animate.",
    snippet: ".card {\n  display: flex;\n  border-radius: 8px;\n  transition: all 0.3s;\n}",
    resource: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  { 
    name: "JavaScript", 
    icon: "code",
    difficulty: "Medium",
    time: "4-5 weeks",
    useCases: "Frontend Interactivity, Backend APIs (Node.js), Web Apps",
    desc: "The scripting language of the web. Essential for creating interactive client-side logic.",
    snippet: "const multiply = (a, b) => a * b;\nconsole.log(multiply(5, 10));",
    resource: "https://javascript.info/"
  },
  { 
    name: "React", 
    icon: "layout",
    difficulty: "Medium",
    time: "4 weeks",
    useCases: "Single Page Apps (SPAs), Reusable UI Components, Web Apps",
    desc: "A popular JS library by Meta for building component-based, high-performance interfaces.",
    snippet: "import React, { useState } from 'react';\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
    resource: "https://react.dev/"
  },
  { 
    name: "Git", 
    icon: "git",
    difficulty: "Easy",
    time: "3-5 days",
    useCases: "Version Control, Collaboration, Code Tracking",
    desc: "Distributed version control system to track changes in source code during development.",
    snippet: "git init\ngit add .\ngit commit -m \"initial commit\"\ngit branch -M main",
    resource: "https://git-scm.com/doc"
  },
  { 
    name: "GitHub", 
    icon: "git",
    difficulty: "Easy",
    time: "2 days",
    useCases: "Code Hosting, Collaboration, CI/CD, Open Source",
    desc: "A cloud platform built on top of Git for sharing code, managing issues, and deployment.",
    snippet: "# Create repo, add remote and push\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main",
    resource: "https://docs.github.com/"
  },
  { 
    name: "Linux", 
    icon: "terminal",
    difficulty: "Medium",
    time: "2-3 weeks",
    useCases: "Server OS, Shell Scripting, Cybersecurity Tools, Cloud Hosting",
    desc: "Open-source Unix-like operating system that powers over 90% of the world's cloud servers.",
    snippet: "# Check disk usage, list files, and grep\ndf -h\nls -la | grep \"config\"",
    resource: "https://linuxjourney.com/"
  },
  { 
    name: "AI", 
    icon: "spark",
    difficulty: "Medium",
    time: "6 weeks",
    useCases: "Natural Language Processing, OpenAI API, Computer Vision, Prompting",
    desc: "Integrating pre-trained neural networks and machine learning APIs into applications.",
    snippet: "import openai\nresponse = openai.ChatCompletion.create(\n  model=\"gpt-4o-mini\",\n  messages=[{\"role\": \"user\", \"content\": \"Hi!\"}]\n)",
    resource: "https://platform.openai.com/docs/"
  },
  { 
    name: "Cyber Security", 
    icon: "shield",
    difficulty: "Hard",
    time: "10-12 weeks",
    useCases: "Penetration Testing, Secure Coding, Vulnerability Analysis",
    desc: "Protecting systems, networks, and programs from digital attacks and data breaches.",
    snippet: "# Check open ports securely (nmap)\nnmap -sV -p 80,443,22 example.com",
    resource: "https://www.owasp.org/"
  },
  { 
    name: "DevOps", 
    icon: "cloud",
    difficulty: "Hard",
    time: "8-10 weeks",
    useCases: "Infrastructure as Code, Automated Deployments, Pipelines",
    desc: "Combining software development (Dev) and IT operations (Ops) to shorten systems lifecycles.",
    snippet: "# Dockerfile example\nFROM node:18\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"node\", \"index.js\"]",
    resource: "https://roadmap.sh/devops"
  },
  { 
    name: "Cloud", 
    icon: "cloud",
    difficulty: "Medium",
    time: "4-6 weeks",
    useCases: "Serverless Deployments, Database Hosting, Scalability",
    desc: "On-demand delivery of compute power, database storage, and applications (AWS, GCP, Vercel).",
    snippet: "# AWS S3 CLI command\naws s3 cp index.html s3://my-bucket-name/index.html",
    resource: "https://aws.amazon.com/free/"
  },
  { 
    name: "Automation", 
    icon: "spark",
    difficulty: "Easy to Medium",
    time: "2-3 weeks",
    useCases: "Web Scraping, Backup Cronjobs, PDF Manipulation",
    desc: "Writing scripts to automatically complete repetitive tasks that consume manual hours.",
    snippet: "import os, shutil\nfor file in os.listdir('.'):\n    if file.endswith('.pdf'):\n        shutil.move(file, './PDFs/')",
    resource: "https://automatetheboringstuff.com/"
  },
];

const WHAT_I_DO = [
  { icon: "instagram", title: "Instagram Coding Reels", desc: "Bite-sized concepts you can watch between classes." },
  { icon: "youtube", title: "YouTube Tutorials", desc: "Longer walkthroughs that build something real." },
  { icon: "code", title: "Full Stack Projects", desc: "Frontend to deployment, explained end to end." },
  { icon: "spark", title: "AI Automation", desc: "Practical AI tools you can actually use today." },
  { icon: "shield", title: "Cyber Security Learning", desc: "Security fundamentals for developers, not just theory." },
  { icon: "cloud", title: "Cloud &amp; DevOps", desc: "Shipping and running code like production teams do." },
  { icon: "book", title: "Student Guidance", desc: "Career paths, project ideas, and honest advice." },
  { icon: "rocket", title: "Freelancing Tips", desc: "How to find, price, and deliver your first client work." },
];

const PROJECTS = [
  { title: "AI Resume Analyzer", desc: "Python + NLP tool that scores resumes against job descriptions.", tags: ["Python", "AI"], demo: "#", github: "https://github.com/Chetansharma74" },
  { title: "DevOps Deployment Pipeline", desc: "CI/CD pipeline template for shipping projects with zero manual steps.", tags: ["DevOps", "Cloud"], demo: "#", github: "https://github.com/Chetansharma74" },
  { title: "Portfolio Starter Kit", desc: "A reusable HTML/CSS/JS template students can fork for their own portfolio.", tags: ["Web Dev"], demo: "#", github: "https://github.com/Chetansharma74" },
  { title: "Linux Automation Scripts", desc: "Shell scripts that automate common sysadmin and setup tasks.", tags: ["Linux", "Automation"], demo: "#", github: "https://github.com/Chetansharma74" },
];

const ROADMAPS = [
  { 
    id: "python",
    title: "Python Roadmap", 
    steps: "Basics → OOP → Automation → Projects",
    detailedSteps: [
      {
        name: "Basics",
        desc: "Master python syntax, data types, standard operators, and file operations.",
        topics: ["Variables & standard data types (lists, dicts, tuples, sets)", "Loops (for, while) & Conditions (if-else)", "Function definition & variable scope", "File reading/writing (open, with open)"],
        resource: "https://www.youtube.com/results?search_query=python+for+beginners"
      },
      {
        name: "OOP",
        desc: "Write modular, clean, and reusable code using Object Oriented Programming.",
        topics: ["Classes, objects, constructors (__init__)", "Inheritance, encapsulation, polymorphism", "Dunder methods (__str__, __len__)", "Exception handling (try-except-finally)"],
        resource: "https://www.youtube.com/results?search_query=python+oop+tutorial"
      },
      {
        name: "Automation",
        desc: "Create scripts to run task schedulers, scrape data, and run command tools.",
        topics: ["Web Scraping (BeautifulSoup, Selenium)", "HTTP requests using `requests` package", "Regular expressions (`re` module)", "System scripts (`os`, `sys`, `shutil` modules)"],
        resource: "https://www.youtube.com/results?search_query=python+automation+projects"
      },
      {
        name: "Projects",
        desc: "Build real projects to consolidate your knowledge and add to your portfolio.",
        topics: ["Telegram bot or CLI Task Manager", "AI resume keywords extractor", "Bulk file renamer script", "Desktop gui app with Tkinter / CustomTkinter"],
        resource: "https://github.com/Chetansharma74"
      }
    ]
  },
  { 
    id: "frontend",
    title: "Frontend Roadmap", 
    steps: "HTML/CSS → JS → React → Deployment",
    detailedSteps: [
      {
        name: "HTML/CSS",
        desc: "Design responsive user interfaces from scratch using clean styling rules.",
        topics: ["Semantic HTML5 structures & SEO tagging", "CSS Flexbox & CSS Grid layouts", "Responsive design & media queries", "CSS variables, transitions, and animations"],
        resource: "https://www.youtube.com/results?search_query=html+css+crash+course"
      },
      {
        name: "JS",
        desc: "Understand dynamic behaviors, asynchronous events, and DOM scripting.",
        topics: ["ES6+ syntax (arrow functions, destructuring)", "DOM selection and event listener manipulation", "Promises, async/await, and Fetch API", "Local storage & JSON manipulation"],
        resource: "https://javascript.info/"
      },
      {
        name: "React",
        desc: "Build high-performance client-side Single Page Applications (SPAs).",
        topics: ["Components, JSX structures, Props", "State management with `useState` hook", "Side effects & API fetching with `useEffect` hook", "Routing via React Router"],
        resource: "https://react.dev/"
      },
      {
        name: "Deployment",
        desc: "Deploy code securely to the cloud with automatic build processes.",
        topics: ["Git version control (GitHub setup)", "Deploy to Vercel, Netlify, or GitHub Pages", "Domain mapping & SSL configurations", "SEO audit using Lighthouse"],
        resource: "https://www.youtube.com/results?search_query=how+to+deploy+on+vercel"
      }
    ]
  },
  { 
    id: "backend",
    title: "Backend Roadmap", 
    steps: "APIs → Databases → Auth → Scaling",
    detailedSteps: [
      {
        name: "APIs",
        desc: "Create server architectures to process client HTTP request methods.",
        topics: ["REST API standards (GET, POST, PUT, DELETE)", "Express.js framework (Node) or FastAPI (Python)", "Request routing, params, and middleware parsing", "Error handling structures & status codes"],
        resource: "https://www.youtube.com/results?search_query=rest+api+backend+development"
      },
      {
        name: "Databases",
        desc: "Design schemas and model persistent databases to hold application data.",
        topics: ["Relational (PostgreSQL/MySQL) vs NoSQL (MongoDB)", "Queries, joins, indexing, and performance", "Database connection pooling & ORMs (Prisma, Mongoose)", "Database backups & cloud deployment (Supabase, Atlas)"],
        resource: "https://www.youtube.com/results?search_query=database+sql+nosql+tutorial"
      },
      {
        name: "Auth",
        desc: "Implement authentication and access control logic for users.",
        topics: ["Password encryption (bcrypt hashing)", "JSON Web Tokens (JWT) & session cookies", "OAuth integration (Sign-in with Google/GitHub)", "Protected routes & role-based authorization"],
        resource: "https://www.youtube.com/results?search_query=backend+authentication+jwt"
      },
      {
        name: "Scaling",
        desc: "Optimize architectures to support heavy loads and high volumes of traffic.",
        topics: ["Caching query results with Redis", "Docker containerization & configurations", "Horizontal scaling & load balancers (Nginx)", "Rate limiting, serverless scaling, API Gateways"],
        resource: "https://roadmap.sh/backend"
      }
    ]
  },
  { 
    id: "cyber",
    title: "Cyber Security Roadmap", 
    steps: "Networking → Linux → Tools → CTFs",
    detailedSteps: [
      {
        name: "Networking",
        desc: "Understand how computers communicate and pass data across networks.",
        topics: ["IP addresses, subnets, OSI & TCP/IP models", "Core protocols (HTTP/S, DNS, SSH, DHCP, FTP)", "Packet analysis with Wireshark", "Routing, firewalls, and ports"],
        resource: "https://www.youtube.com/results?search_query=networking+cybersecurity+tutorial"
      },
      {
        name: "Linux",
        desc: "Control operating systems via terminal shells and admin utilities.",
        topics: ["Bash command-line navigation & file manipulation", "Users, groups, permissions (chmod, chown)", "SSH connections & keys configuration", "Shell scripting for administrative automation"],
        resource: "https://linuxjourney.com/"
      },
      {
        name: "Tools",
        desc: "Learn standard tools used for penetration testing and auditing security.",
        topics: ["Network scanning & auditing with Nmap", "Vulnerability exploitation frameworks (Metasploit)", "Proxy intercepting & web analysis (Burp Suite)", "Password cracking tools (John the Ripper, Hydra)"],
        resource: "https://www.youtube.com/results?search_query=nmap+burp+suite+tutorial"
      },
      {
        name: "CTFs",
        desc: "Participate in hands-on challenges to solve realistic hacking puzzles.",
        topics: ["Jeopardy-style Capture The Flag events", "Linux machine hacking on TryHackMe", "Active Directory & exploit research on HackTheBox", "OWASP Top 10 web vulnerabilities exercises"],
        resource: "https://tryhackme.com/"
      }
    ]
  },
  { 
    id: "devops",
    title: "DevOps Roadmap", 
    steps: "Linux → Git → CI/CD → Cloud",
    detailedSteps: [
      {
        name: "Linux",
        desc: "Secure, configure, and maintain Linux servers inside cloud hosts.",
        topics: ["Process monitoring (top, htop, systemctl)", "SSH security & keys auditing", "Networking debugging commands (ping, curl, netstat)", "Cron jobs and background task management"],
        resource: "https://roadmap.sh/linux"
      },
      {
        name: "Git",
        desc: "Coordinate collaborative code workflows with version history systems.",
        topics: ["Repository operations (git clone, branch, merge, stash)", "Rebasing vs merging, resolving conflicts", "Commit message guidelines & branch tagging", "GitHub PR flows and code reviews"],
        resource: "https://www.youtube.com/results?search_query=git+github+tutorial"
      },
      {
        name: "CI/CD",
        desc: "Automate code testing, builds, packaging, and hosting steps.",
        topics: ["GitHub Actions workflow YAML file scripting", "Unit test runners & linter checks automation", "Build packaging & Docker image generation", "CD to staging and production servers"],
        resource: "https://www.youtube.com/results?search_query=github+actions+ci+cd+pipeline"
      },
      {
        name: "Cloud",
        desc: "Deploy highly available containerized environments in the cloud.",
        topics: ["Cloud Providers (AWS, GCP, Azure infrastructure)", "Docker containerizing application servers", "Kubernetes (K8s) orchestration basics", "Infrastructure as Code (IaC) with Terraform"],
        resource: "https://roadmap.sh/devops"
      }
    ]
  },
  { 
    id: "ai",
    title: "AI Roadmap", 
    steps: "Python → ML Basics → AI Tools → Automation",
    detailedSteps: [
      {
        name: "Python",
        desc: "Write math and data manipulation routines using standard libraries.",
        topics: ["Multidimensional arrays with NumPy", "Dataframe operations & analytics with Pandas", "Data visualization (Matplotlib, Seaborn)", "Notebook workspaces (Jupyter, Google Colab)"],
        resource: "https://www.youtube.com/results?search_query=python+for+data+science"
      },
      {
        name: "ML Basics",
        desc: "Train mathematical models using standard machine learning packages.",
        topics: ["Supervised (Regression, Classification) vs Unsupervised (K-Means)", "Data scaling, train-test-splitting", "Model fitting & evaluation with Scikit-Learn", "Neural network concepts & Deep learning introductory steps"],
        resource: "https://www.youtube.com/results?search_query=machine+learning+for+beginners"
      },
      {
        name: "AI Tools",
        desc: "Integrate Large Language Models and state-of-the-art AI systems.",
        topics: ["Prompt Engineering guidelines & system prompts", "API client setups (OpenAI API, Google Gemini API)", "Token counts, temperature, and cost optimizations", "Vector embeddings & databases (Pinecone, ChromaDB)"],
        resource: "https://platform.openai.com/docs/overview"
      },
      {
        name: "Automation",
        desc: "Deploy autonomous AI agents to parse files and trigger code.",
        topics: ["LangChain / LlamaIndex workflow orchestration", "AI chatbots with context memory", "Autonomous agents & browser automations", "Publishing AI apps (Streamlit, Gradio)"],
        resource: "https://www.youtube.com/results?search_query=langchain+ai+agents+tutorial"
      }
    ]
  },
];

const RESOURCES = [
  { icon: "note", title: "Notes", desc: "Clean, exam-and-interview-ready notes." },
  { icon: "sheet", title: "Cheat Sheets", desc: "Quick-reference sheets for daily coding." },
  { icon: "code", title: "Source Code", desc: "Full source for every project I build." },
  { icon: "resume", title: "Resume Templates", desc: "Developer resume templates that pass ATS scans." },
  { icon: "map", title: "Roadmaps", desc: "Downloadable versions of every roadmap above." },
  { icon: "question", title: "Interview Questions", desc: "Curated questions by topic and difficulty." },
];

const DETAILED_RESOURCES = {
  note: [
    {
      title: "Python Basics & Flow Control",
      category: "Python",
      content: `### Python Core Syntax Notes
These notes are curated for quick exam revision or interview preparation.

#### 1. Core Data Structures
* **Lists**: Mutable, ordered sequences. e.g., \`[1, 2, 'three']\`
* **Tuples**: Immutable, ordered sequences. e.g., \`(10, 20)\`
* **Dictionaries**: Key-value pairs, unique keys. e.g., \`{'id': 101, 'role': 'admin'}\`
* **Sets**: Unordered collection of unique items. e.g., \`{1, 2, 3}\`

#### 2. Flow Control Example
\`\`\`python
# List comprehension is faster and cleaner
numbers = [1, 2, 3, 4, 5]
squared_evens = [x**2 for x in numbers if x % 2 == 0]
print(squared_evens) # Output: [4, 16]
\`\`\`

#### 3. Complexity Tip
* List append is **O(1)**.
* Inserting at index 0 is **O(n)**. Use \`collections.deque\` if you need fast appends and pops on both ends.`
    },
    {
      title: "Web Structures & Styling Secrets",
      category: "Frontend",
      content: `### Semantic HTML & CSS Layouts
A cheat sheet guide to clean structures and positioning.

#### 1. Semantic Tagging Rules
Always prefer semantic elements over generic divs for accessibility (A11y) and SEO:
* Use \`<header>\` and \`<footer>\` for page limits.
* Use \`<main>\` for core content (only one per document).
* Use \`<article>\` for independent, reusable layout cards.
* Use \`<section>\` for grouping related layouts.

#### 2. CSS Grid & Flexbox
* **Flexbox** is one-dimensional (row OR column layout).
* **Grid** is two-dimensional (both rows AND columns layout).

\`\`\`css
/* Centering anything with Flexbox */
.container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
}

/* Perfect Grid layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
\`\`\``
    },
    {
      title: "Asynchronous JavaScript & DOM",
      category: "Frontend",
      content: `### JavaScript Promises and Fetch API
Understanding asynchronous execution and DOM changes.

#### 1. Event Loop Basics
JS is single-threaded. Non-blocking tasks are handled via the Web APIs. Once finished, they enter the Callback Queue and are pushed to the Stack by the Event Loop.

#### 2. Async/Await with Error Catching
\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.github.com/users/\${userId}\`);
    if (!response.ok) throw new Error("User profile not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return null;
  }
}
\`\`\``
    }
  ],
  sheet: [
    {
      title: "Python Syntax Cheatsheet",
      category: "Python",
      code: `# ==========================================
# PYTHON QUICK REFERENCE CHEATSHEET
# ==========================================

# 1. Useful String Methods
text = "  Coding Vibe  "
print(text.strip())           # "Coding Vibe"
print(text.lower().replace("coding", "learn")) # "learn vibe"
print(text.split())           # ["Coding", "Vibe"]

# 2. Dictionary Iteration
student = {"name": "Chetan", "topic": "AI", "grade": "A"}
for key, val in student.items():
    print(f"{key}: {val}")

# 3. File Operations (Safe opening)
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("Learn. Build. Grow.")

# 4. Lambda & Maps
nums = [1, 2, 3, 4]
doubles = list(map(lambda x: x * 2, nums)) # [2, 4, 6, 8]
`
    },
    {
      title: "Git Commands Cheatsheet",
      category: "DevOps",
      code: `# ==========================================
# GIT & GITHUB COMMAND CHEATSHEET
# ==========================================

# Setup
git init                            # Initialize local repository
git clone <url>                     # Clone remote repository

# Everyday workflow
git status                          # View changed files
git add <file-name>                 # Stage specific file
git add .                           # Stage all modified files
git commit -m "Commit message"      # Commit staged changes
git push origin main                # Push to main branch on GitHub

# Branching
git branch <branch-name>            # Create new branch
git checkout <branch-name>          # Switch to branch
git checkout -b <new-branch>        # Create and switch to branch
git merge <branch-name>             # Merge branch into current branch
git branch -d <branch-name>         # Delete local branch
`
    },
    {
      title: "CSS Grid & Flexbox Reference",
      category: "Frontend",
      code: `/* ==========================================
   CSS FLEXBOX & GRID CHEATSHEET
   ========================================== */

/* Flexbox parent rules */
.flex-parent {
  display: flex;
  flex-direction: row;            /* row | row-reverse | column */
  justify-content: flex-start;    /* flex-start | flex-end | center | space-between | space-around */
  align-items: stretch;           /* stretch | flex-start | flex-end | center | baseline */
  flex-wrap: wrap;                /* nowrap | wrap | wrap-reverse */
}

/* Grid parent rules */
.grid-parent {
  display: grid;
  grid-template-columns: 1fr 2fr;  /* Two columns: 1 part and 2 parts */
  grid-template-rows: auto 100px;  
  gap: 15px;                       /* row-gap and column-gap */
  
  /* Responsive grid layout without media queries */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`
    }
  ],
  code: [
    {
      title: "AI Chat Assistant Script",
      category: "AI",
      desc: "Connects to Google Gemini API to run a terminal-based conversational loop with system memory.",
      github: "https://github.com/Chetansharma74",
      code: `import google.generativeai as genai
import os

# Configure your API key
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

print("AI assistant ready. Type 'exit' to quit.")
while True:
    user_input = input("\nYou: ")
    if user_input.lower() == 'exit':
        break
    
    response = chat.send_message(user_input)
    print(f"\nAI: {response.text}")
`
    },
    {
      title: "Lightweight Web Port Scanner",
      category: "Cyber Security",
      desc: "Fast, multi-threaded python port scanner using sockets to identify open ports on a target host.",
      github: "https://github.com/Chetansharma74",
      code: `import socket
import sys
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor

target = input("Enter target host (IP/Domain): ")
target_ip = socket.gethostbyname(target)

print(f"Scanning target: {target_ip}")
print("Scan started at: " + str(datetime.now()))

def scan_port(port):
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(0.5)
        result = s.connect_ex((target_ip, port))
        if result == 0:
            print(f"Port {port}: OPEN")
        s.close()
    except Exception:
        pass

# Use thread pool to scan ports 1-1024 concurrently
with ThreadPoolExecutor(max_workers=100) as executor:
    executor.map(scan_port, range(1, 1025))
`
    }
  ],
  resume: [
    {
      title: "ATS-Scannable Developer Resume Template",
      category: "General",
      desc: "A clean, markdown-formatted developer resume designed to pass ATS screening systems. Copy and customize it.",
      code: `# [YOUR NAME]
[City, State, Zip] | [Phone Number] | [Email Address] | [LinkedIn Link] | [GitHub Link]

## PROFESSIONAL SUMMARY
Highly motivated junior Software Developer with a strong foundation in Python, JavaScript, and cloud deployment. Experienced in building automated pipelines, API architectures, and responsive web pages. Passionate about AI integration and secure development.

## TECHNICAL SKILLS
* **Languages**: Python, Java, JavaScript, HTML5, CSS3, SQL
* **Frameworks & Libraries**: React, ExpressJS, FastAPI, Flask
* **Tools & Platforms**: Git, GitHub, Linux Shell, Docker, AWS, Vercel
* **Core Domains**: Automation, DevOps Pipelines, Web Scraping, REST APIs

## PROJECTS
### AI Resume Keywords Extractor (Python, NLP, OpenAI API)
* Built a python-based tool that parses developer resumes and compares them against job descriptions.
* Leveraged OpenAI API to extract missing keywords and compute alignment scores, improving matching by 40%.
* Designed a responsive HTML/CSS/JS frontend to upload PDF files and display scores.

### DevOps CI/CD Deployment Pipeline (GitHub Actions, Docker, Cloud)
* Engineered automated CI/CD pipeline to test, build, and deploy web applications to cloud servers.
* Integrated security linter scanners (Bandit, ESLint) to ensure code security before merges.
* Reduced deployment cycle time from 15 minutes manual work to zero manual steps.

## EDUCATION
**Master of Computer Applications (MCA)** | [Your University Name] (Expected 2027)
**Bachelor of Computer Science** | [Your College Name] (Graduated 2025)
`
    }
  ],
  map: [
    {
      title: "Downloadable PDF / SVG Roadmaps",
      category: "Roadmaps",
      desc: "Get printable high-resolution versions of all six learning paths.",
      links: [
        { name: "Python Roadmap (PDF)", id: "python" },
        { name: "Frontend Roadmap (PDF)", id: "frontend" },
        { name: "Backend Roadmap (PDF)", id: "backend" },
        { name: "Cyber Security Roadmap (PDF)", id: "cyber" },
        { name: "DevOps Roadmap (PDF)", id: "devops" },
        { name: "AI Roadmap (PDF)", id: "ai" }
      ]
    }
  ],
  question: [
    {
      q: "What is the difference between python Lists and Tuples?",
      a: "Lists are **mutable** (can be modified after creation: appended, popped, or sorted), whereas Tuples are **immutable** (their content cannot be altered once defined). Tuples are slightly faster, use less memory, and can be used as dictionary keys because they are hashable.",
      topic: "Python",
      level: "Beginner"
    },
    {
      q: "Explain asynchronous code, callbacks, and promises in JS.",
      a: "JavaScript is single-threaded. **Asynchronous operations** allow tasks to run in the background (like API calls) without blocking the UI. **Callbacks** were the original way to handle completed tasks but led to 'callback hell'. **Promises** represent a value that will resolve or reject in the future, allowing chaining with `.then()`. **Async/Await** is modern syntax sugar built on promises to make async code read like synchronous code.",
      topic: "Frontend",
      level: "Intermediate"
    },
    {
      q: "What is a SQL Injection (SQLi) and how do you prevent it?",
      a: "SQL Injection is a security exploit where an attacker inputs malicious SQL queries into inputs (like forms or URL params) to manipulate a database. You prevent SQLi by using **Prepared Statements (Parameterized Queries)**, sanitizing inputs, using ORMs/ODMs which parameterize queries by default, and executing database tasks with least-privileged roles.",
      topic: "Cyber Security",
      level: "Advanced"
    },
    {
      q: "What is the difference between Docker and a Virtual Machine?",
      a: "A **Virtual Machine (VM)** includes a full guest operating system, virtual drivers, and virtual hardware managed by a hypervisor. This makes VMs heavy and slow to start. **Docker Containers** share the host system's OS kernel and package only the application and its dependencies, making them extremely lightweight, fast to spin up, and consistent across environments.",
      topic: "DevOps",
      level: "Intermediate"
    },
    {
      q: "How does the Virtual DOM make React faster?",
      a: "The **Virtual DOM (VDOM)** is a lightweight copy of the real DOM kept in memory. When a component's state changes, React updates the VDOM first. Then it compares the updated VDOM with a snapshot of the previous VDOM (a process called 'diffing'). React then calculates the most efficient way to update the real DOM and applies only those specific changes (reconciliation), avoiding expensive full-page reflows.",
      topic: "React",
      level: "Intermediate"
    }
  ]
};

const SOCIALS = [
  { name: "Instagram", handle: "@coding_vieb", url: "https://www.instagram.com/coding_vieb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: "instagram" },
  { name: "Telegram", handle: "@coding_vieb", url: "https://t.me/coding_vieb", icon: "telegram" },
  { name: "GitHub", handle: "Chetansharma74", url: "https://github.com/Chetansharma74", icon: "github" },
  { name: "LeetCode", handle: "chetan-sharma74", url: "https://leetcode.com/u/chetan-sharma74/", icon: "leetcode" },
  { name: "YouTube", handle: "Coding_Vibe", url: "#", icon: "youtube" },
  { name: "LinkedIn", handle: "Chetan Sharma", url: "#", icon: "linkedin" },
];

const TESTIMONIALS = [
  { quote: "Coding_Vibe's reels finally made Python click for me — short, practical, no fluff.", who: "B.Tech student, 2nd year" },
  { quote: "The project tutorials are the reason I have something real to show in interviews.", who: "MCA student" },
  { quote: "Clear roadmaps saved me months of randomly jumping between topics.", who: "Self-taught developer" },
];

const FAQS = [
  { q: "Who is Coding_Vibe for?", a: "Students and beginners who want to learn programming, AI, cyber security, and DevOps in a practical, project-first way — no prior experience required." },
  { q: "Is the content free?", a: "Yes. Notes, cheat sheets, roadmaps, and source code shared here are free. Some resources may link to external free platforms as well." },
  { q: "Do you take freelance or collab requests?", a: "Yes — reach out via email or Instagram DM with details about your project or collaboration idea." },
  { q: "Where do you post new content first?", a: "Instagram and Telegram get the fastest updates; YouTube and this site are updated for longer-form tutorials and resources." },
];
