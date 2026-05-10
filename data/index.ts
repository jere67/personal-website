// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroRoles: string[] = [
  "Software Engineer",
  "Website Developer",
  "Data Scientist",
  "Machine Learning Engineer",
]

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Education", link: "/#education" },
  { name: "Skills", link: "/#skills" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:max-h-[70vh]",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ann Arbor, MI",
    description: "Currently located in",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[25vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "University of Michigan",
    description: "Bachelor of Science in Engineering in Computer Science",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:max-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Stacks",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/icons/grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Stealth",
    description: "Currently building",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 w-[45vw] md:h-96 rounded-lg ",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/icons/stealth.png",
    spareImg: "",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AIMS Lab Showcase Website",
    des: "The official website for the Artificial Intelligence and Multiphysics Simulations (AIMS) lab.",
    img: "/projects/aims-website.png",
    iconLists: ["/tech/next.svg", "/tech/tail.svg", "/tech/ts.svg"],
    link: "https://aims-umich.com",
  },
  {
    id: 2,
    title: "Social Media Sentiment Analysis Dashboard",
    des: "Real time sentiment analysis for clean energy transition with large language models.",
    img: "/projects/SocialMedia.png",
    iconLists: ["/tech/re.svg", "/tech/python.svg", "/tech/fastapi.svg", "/tech/huggingface.svg", "/tech/sqlite.svg"],
    link: "https://courses.lsa.umich.edu/urop-symposium/symposium-presentati/enabling-real-time-sentiment-analysis-for-clean-energy-transition-with-large-language-models/", // TODO: REPLACE WHEN WEBSITE IS DEPLOYED
  },
  {
    id: 3,
    title: "SpeechMaps",
    des: "An AI-powered voice interface for crash detection and optimized route rerouting.",
    img: "/projects/speechmaps.png",
    iconLists: ["/tech/next.svg", "/tech/tail.svg", "/tech/ts.svg", "/tech/groq.webp"],
    link: "https://speechmaps.vercel.app",
  },
  {
    id: 4,
    title: "Who is the ATP Superstar?",
    des: "Data analysis and HistGradientBoostingClassifier model to predict ATP tour match outcomes with 92.01% accuracy.",
    img: "/projects/roger-federer.jpg",
    iconLists: ["/tech/python.svg", "/tech/pandas.png", "/tech/numpy.svg", "/tech/scikit-learn.png"],
    link: "https://pvarshh.github.io/tennis-prediction/",
  },
];

export const languages = [
  { skillName: "C", img: "/tech/c.png", width: 60, height: 60, url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { skillName: "C++", img: "/tech/c++.png", width: 60, height: 60, url: "https://isocpp.org/" },
  { skillName: "Python", img: "/tech/python.png", width: 60, height: 60, url: "https://www.python.org/" },
  { skillName: "Go", img: "/tech/go.png", width: 60, height: 60, url: "https://go.dev/" },
  { skillName: "TypeScript", img: "/tech/ts.png", width: 60, height: 60, url: "https://www.typescriptlang.org/" },
  { skillName: "JavaScript", img: "/tech/js.png", width: 60, height: 60, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { skillName: "SQL", img: "/tech/sql.png", width: 60, height: 60, url: "https://en.wikipedia.org/wiki/SQL" },
  { skillName: "HTML5", img: "/tech/html.png", width: 60, height: 60, url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { skillName: "CSS3", img: "/tech/css.png", width: 60, height: 60, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

export const devTools = [
  { skillName: "Git", img: "/tech/git.png", width: 60, height: 60, url: "https://git-scm.com/" },
  { skillName: "GitHub", img: "/tech/github.svg", width: 60, height: 60, url: "https://github.com/" },
  { skillName: "VSCode", img: "/tech/vscode.png", width: 60, height: 60, url: "https://code.visualstudio.com/" },
  { skillName: "Bash", img: "/tech/bash.png", width: 60, height: 60, url: "https://www.gnu.org/software/bash/" },
  { skillName: "Jupyter", img: "/tech/jupyter.png", width: 60, height: 60, url: "https://jupyter.org/" },
  { skillName: "AWS CDK", img: "/tech/cdk.png", width: 60, height: 60, url: "https://aws.amazon.com/cdk/" },
  { skillName: "AWS CloudWatch", img: "/tech/cloudwatch.png", width: 60, height: 60, url: "https://aws.amazon.com/cloudwatch/" },
  { skillName: "AWS IAM", img: "/tech/iam.png", width: 60, height: 60, url: "https://aws.amazon.com/iam/" },
];

export const frontend = [
  { skillName: "React", img: "/tech/react.png", width: 65, height: 60, url: "https://reactjs.org/" },
  { skillName: "Next.js", img: "/tech/next.png", width: 60, height: 60, url: "https://nextjs.org/" },
  { skillName: "TailwindCSS", img: "/tech/tailwind.png", width: 60, height: 60, url: "https://tailwindcss.com/" },
  { skillName: "MaterialUI", img: "/tech/mui.png", width: 60, height: 60, url: "https://mui.com/" },
  { skillName: "AceternityUI", img: "/tech/aceternity.png", width: 60, height: 60, url: "https://ui.aceternity.com/" },
  { skillName: "Framer Motion", img: "/tech/framer.svg", width: 60, height: 60, url: "https://www.framer.com/motion/" },
];

export const backend = [
  { skillName: "Node.js", img: "/tech/node-js.png", width: 60, height: 60, url: "https://nodejs.org/" },
  { skillName: "Express.js", img: "/tech/express.png", width: 60, height: 60, url: "https://expressjs.com/" },
  { skillName: "Flask", img: "/tech/flask.svg", width: 60, height: 60, url: "https://flask.palletsprojects.com/" },
  { skillName: "PostgreSQL", img: "/tech/postgres.png", width: 60, height: 60, url: "https://www.postgresql.org/" },
  { skillName: "Supabase", img: "/tech/supabase.svg", width: 60, height: 60, url: "https://supabase.com/" },
  { skillName: "FastAPI", img: "/tech/fastapi.png", width: 60, height: 60, url: "https://fastapi.tiangolo.com/" },
  { skillName: "AWS Athena", img: "/tech/athena.png", width: 60, height: 60, url: "https://aws.amazon.com/athena/" },
  { skillName: "AWS DynamoDB", img: "/tech/dynamodb.png", width: 60, height: 60, url: "https://aws.amazon.com/dynamodb/" },
];

export const dataScience = [
  { skillName: "Pandas", img: "/tech/pandas.png", width: 70, height: 70, url: "https://pandas.pydata.org/" },
  { skillName: "NumPy", img: "/tech/numpy.svg", width: 60, height: 60, url: "https://numpy.org/" },
  { skillName: "Plotly", img: "/tech/plotly.jpeg", width: 60, height: 60, url: "https://plotly.com/" },
  { skillName: "Scikit-Learn", img: "/tech/scikit-learn.png", width: 70, height: 70, url: "https://scikit-learn.org/" },
  { skillName: "AWS Glue", img: "/tech/glue.png", width: 60, height: 60, url: "https://aws.amazon.com/glue/" },
];

export const machineLearning = [
  { skillName: "PyTorch", img: "/tech/pytorch.svg", width: 60, height: 60, url: "https://pytorch.org/" },
  { skillName: "TensorFlow", img: "/tech/tensorflow.svg", width: 60, height: 60, url: "https://www.tensorflow.org/" },
  { skillName: "OpenCV", img: "/tech/opencv.svg", width: 60, height: 60, url: "https://opencv.org/" },
];

export const cloud  = [
  { skillName: "AWS EC2", img: "/tech/ec2.png", width: 60, height: 60, url: "https://aws.amazon.com/ec2/" },
  { skillName: "AWS ELB", img: "/tech/elb.png", width: 60, height: 60, url: "https://aws.amazon.com/elasticloadbalancing/" },
  { skillName: "AWS ECS", img: "/tech/ecs.png", width: 60, height: 60, url: "https://aws.amazon.com/ecs/" },
  { skillName: "AWS Fargate", img: "/tech/fargate.png", width: 60, height: 60, url: "https://aws.amazon.com/fargate/" },
  { skillName: "AWS Route53", img: "/tech/route53.png", width: 60, height: 60, url: "https://aws.amazon.com/route53/" },
  { skillName: "AWS Certificate Manager", img: "/tech/acm.png", width: 60, height: 60, url: "https://aws.amazon.com/certificate-manager/" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/icons/git.svg",
    link: "https://github.com/jere67"
  },
  {
    id: 2,
    img: "/icons/link.svg",
    link: "https://www.linkedin.com/in/jeremy-moon7/"
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceCard {
  logoPath: string
  company: string
  title: string
  date: string
}

export const expCards: ExperienceCard[] = [
  {
    logoPath: "/logos/coinbase.png",
    company: "Coinbase",
    title: "Incoming Software Engineer Intern",
    date: "MAY 2026 — PRESENT",
  },
  {
    logoPath: "/logos/amazon.jpg",
    company: "Amazon",
    title: "Software Development Engineer Intern",
    date: "MAY 2025 — AUG 2025",
  },
  {
    logoPath: "/logos/mb.jpeg",
    company: "Michigan Blockchain",
    title: "Investment Researcher",
    date: "JAN 2025 — PRESENT",
  },
  {
    logoPath: "/logos/aims.png",
    company: "AIMS Lab",
    title: "Computing Group",
    date: "SEP 2024 — PRESENT",
  },
  {
    logoPath: "/logos/mdst.jpeg",
    company: "MDST",
    title: "Data Analyst",
    date: "AUG 2023 — PRESENT",
  },
]

// ─── Education ────────────────────────────────────────────────────────────────

export interface Course {
  code: string
  title: string
  status: string
}

export interface Award {
  title: string
  desc: string
}

export const courses: Course[] = [
  { code: "EECS 491", title: "Distributed Systems", status: "" },
  { code: "EECS 485", title: "Web Systems", status: "" },
  { code: "EECS 482", title: "Operating Systems", status: "Scheduled" },
  { code: "EECS 449", title: "Conversational Artificial Intelligence", status: "Scheduled" },
  { code: "EECS 445", title: "Introduction to Machine Learning", status: "" },
  { code: "EECS 398", title: "Practical Data Science", status: "" },
  { code: "EECS 376", title: "Foundations of Computer Science", status: "" },
  { code: "EECS 370", title: "Computer Organization", status: "" },
  { code: "EECS 281", title: "Data Structures and Algorithms", status: "" },
  { code: "EECS 280", title: "Programming (OOP) & Intro Data Structures", status: "" },
  { code: "EECS 203", title: "Discrete Mathematics", status: "" },
  { code: "MATH 425", title: "Introduction to Probability", status: "" },
  { code: "MATH 217", title: "Linear Algebra", status: "" },
  { code: "MATH", title: "Calculus 1, 2, 3", status: "" },
  { code: "STATS 413", title: "Applied Regression Analysis", status: "" },
]

export const awards: Award[] = [
  { title: "James B. Angell Scholar", desc: "Achieve an 'A' record for 2+ consecutive terms" },
  { title: "William J. Branstrom Freshman Prize", desc: "Top 5% of Class" },
  { title: "Dean's Honor List", desc: "Awarded 2x" },
  { title: "University Honors", desc: "Academic Excellence" },
]

export const activities: string[] = [
  "Tau Beta Pi",
  "Michigan Blockchain",
  "Michigan Data Science Team (MDST)",
  "Michigan Student Artificial Intelligence Lab (MSAIL)",
  "Korean-American Scientists and Engineers Association (KSEA)",
]