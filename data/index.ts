export const navItems = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
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
    description: "Bachelor of Science in Engineering in Data Science",
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
    img: "/grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Gym.ai",
    description: "Currently building",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 w-[45vw] md:h-96 rounded-lg ",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/cover.png",
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

export const images = [
  {
    id: 1,
    img: "/img1.jpg",
  },
  {
    id: 2,
    img: "/img2.jpg",
  },
  {
    id: 3,
    img: "/img3.jpg",
  },
  {
    id: 4,
    img: "/img4.jpg",
  },
  {
    id: 5,
    img: "/img5.jpg",
  },
  {
    id: 6,
    img: "/img6.jpg",
  },
  {
    id: 7,
    img: "/img7.jpg",
  },
  {
    id: 8,
    img: "/img8.jpg",
  },
  {
    id: 9,
    img: "/img9.jpg",
  },
  {
    id: 10,
    img: "/img10.jpg",
  },
]

export const projects = [
  {
    id: 1,
    title: "AIMS Lab Showcase Website",
    des: "The official website for the Artificial Intelligence and Multiphysics Simulations (AIMS) lab.",
    img: "/aims-website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "aims-umich.com",
  },
  {
    id: 2,
    title: "Social Media Sentiment Analysis Dashboard",
    des: "Real time sentiment analysis for clean energy transition with large language models.",
    img: "/SocialMedia.png",
    iconLists: ["/re.svg", "/python.svg", "/fastapi.svg", "/huggingface.svg", "sqlite.svg"],
    link: "courses.lsa.umich.edu/urop-symposium/symposium-presentati/enabling-real-time-sentiment-analysis-for-clean-energy-transition-with-large-language-models/", // TODO: REPLACE WHEN WEBSITE IS DEPLOYED
  },
  {
    id: 3,
    title: "SpeechMaps",
    des: "An AI-powered voice interface for crash detection and optimized route rerouting.",
    img: "/speechmaps.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/groq.webp"],
    link: "speechmaps.vercel.app",
  },
  {
    id: 4,
    title: "Who is the ATP Superstar?",
    des: "Data analysis and HistGradientBoostingClassifier model to predict ATP tour match outcomes with 92.01% accuracy.",
    img: "/roger-federer.jpg",
    iconLists: ["/python.svg", "/pandas.png", "/numpy.svg", "/scikit-learn.png"],
    link: "pvarshh.github.io/tennis-prediction/",
  },
];

export const languages = [
  { skillName: "Python", img: "/python.png", width: 60, height: 60, url: "https://www.python.org/" },
  { skillName: "C++", img: "/c++.png", width: 60, height: 60, url: "https://isocpp.org/" },
  { skillName: "JavaScript", img: "/js.png", width: 60, height: 60, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { skillName: "TypeScript", img: "/ts.png", width: 60, height: 60, url: "https://www.typescriptlang.org/" },
  { skillName: "HTML5", img: "/html.png", width: 60, height: 60, url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { skillName: "CSS3", img: "/css.png", width: 60, height: 60, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { skillName: "C", img: "/c.png", width: 60, height: 60, url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { skillName: "SQL", img: "/sql.png", width: 60, height: 60, url: "https://en.wikipedia.org/wiki/SQL" },
];

export const devTools = [
  { skillName: "Git", img: "/git.png", width: 60, height: 60, url: "https://git-scm.com/" },
  { skillName: "GitHub", img: "/github.svg", width: 60, height: 60, url: "https://github.com/" },
  { skillName: "VSCode", img: "/vscode.png", width: 60, height: 60, url: "https://code.visualstudio.com/" },
  { skillName: "Bash", img: "/bash.png", width: 60, height: 60, url: "https://www.gnu.org/software/bash/" },
  { skillName: "Jupyter", img: "/jupyter.png", width: 60, height: 60, url: "https://jupyter.org/" },
];

export const frontend = [
  { skillName: "React", img: "/react.png", width: 65, height: 60, url: "https://reactjs.org/" },
  { skillName: "Next.js", img: "/next.png", width: 60, height: 60, url: "https://nextjs.org/" },
  { skillName: "TailwindCSS", img: "/tailwind.png", width: 60, height: 60, url: "https://tailwindcss.com/" },
  { skillName: "MaterialUI", img: "/mui.png", width: 60, height: 60, url: "https://mui.com/" },
  { skillName: "AceternityUI", img: "/aceternity.png", width: 60, height: 60, url: "https://ui.aceternity.com/" },
  { skillName: "Framer Motion", img: "/framer.svg", width: 60, height: 60, url: "https://www.framer.com/motion/" },
];

export const backend = [
  { skillName: "Node.js", img: "/node-js.png", width: 60, height: 60, url: "https://nodejs.org/" },
  { skillName: "Express.js", img: "/express.png", width: 60, height: 60, url: "https://expressjs.com/" },
  { skillName: "Flask", img: "/flask.svg", width: 60, height: 60, url: "https://flask.palletsprojects.com/" },
  { skillName: "PostgreSQL", img: "/postgres.png", width: 60, height: 60, url: "https://www.postgresql.org/" },
  { skillName: "Supabase", img: "/supabase.svg", width: 60, height: 60, url: "https://supabase.com/" },
  { skillName: "FastAPI", img: "/fastapi.png", width: 60, height: 60, url: "https://fastapi.tiangolo.com/" },
];

export const dataScience = [
  { skillName: "Pandas", img: "/pandas.png", width: 70, height: 70, url: "https://pandas.pydata.org/" },
  { skillName: "NumPy", img: "/numpy.svg", width: 60, height: 60, url: "https://numpy.org/" },
  { skillName: "Plotly", img: "/plotly.jpeg", width: 60, height: 60, url: "https://plotly.com/" },
  { skillName: "Scikit-Learn", img: "/scikit-learn.png", width: 70, height: 70, url: "https://scikit-learn.org/" },
];

export const machineLearning = [
  { skillName: "PyTorch", img: "/pytorch.svg", width: 60, height: 60, url: "https://pytorch.org/" },
  { skillName: "TensorFlow", img: "/tensorflow.svg", width: 60, height: 60, url: "https://www.tensorflow.org/" },
  { skillName: "OpenCV", img: "/opencv.svg", width: 60, height: 60, url: "https://opencv.org/" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jere67"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jeremy-moon7/"
  },
];