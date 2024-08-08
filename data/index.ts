export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
];

export const gridItems = [
  {
    id: 1,
    title: "University of Michigan",
    description: "Bachelor of Science in Engineering in Data Science",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ann Arbor, MI",
    description: "Currently located in",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Connect",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
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

export const projects = [
  {
    id: 1,
    title: "Gym.ai",
    des: "Gym.ai allows you to upload your own lifting videos and get personalized feedback on your exercise form.",
    img: "/gymai.png",
    iconLists: ["/re.svg", "/tail.svg", "/flask.svg"],
    link: "Building...",
  },
  {
    id: 2,
    title: "Crypto Moon",
    des: "A website that allows users to track the top 10 cryptocurrencies by market cap. (Link loads slowly)",
    img: "/crypto-moon.png",
    iconLists: ["/ejs.svg", "/node.svg", "/express.svg"],
    link: "blogmoon-f26g.onrender.com/",
  },
  {
    id: 3,
    title: "Real vs. Fake Face Detector",
    des: "A trained EfficientNet-B5 model to determine whether a picture of a face is fake or not.",
    img: "/rvf.png",
    iconLists: ["/python.svg", "/pytorch.svg"],
    link: "docs.google.com/presentation/d/1dPoYFZlxFjBm6SLyaRf9dglWmkp154A-kizWcP0N7Hk/edit?usp=sharing",
  },
  {
    id: 4,
    title: "Personal Website",
    des: "A website that showcases who I am and some of my proudest work and achievements.",
    img: "/website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "/",
  },
];

export const languages = [
  {
    skillName: "C/C++",
    Image: "/c++.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Python",
    Image: "/python.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skillName: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
];

export const frontend = [
  {
    skillName: "HTML5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "CSS3",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "TailwindCSS",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "MaterialUI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Next.js",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const backend = [
  {
    skillName: "Node.js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Express.js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Flask",
    Image: "/flask.svg",
    width: 80,
    height: 80,
  },
  // {
  //   skillName: "MongoDB",
  //   Image: "/mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  // {
  //   skillName: "Firebase",
  //   Image: "/Firebase.png",
  //   width: 55,
  //   height: 55,
  // },
  {
    skillName: "PostgresSQL",
    Image: "/postgres.png",
    width: 70,
    height: 70,
  },
];

export const dataScience = [
  {
    skillName: "Pandas",
    Image: "/pandas.png",
    width: 60,
    height: 60,
  },
  {
    skillName: "NumPy",
    Image: "/numpy.svg",
    width: 60,
    height: 60,
  },
  {
    skillName: "Matplotlib",
    Image: "/matplotlib.png",
    width: 60,
    height: 60,
  },
  {
    skillName: "Scikit-Learn",
    Image: "/scikit-learn.png",
    width: 60,
    height: 60,
  },
];

export const machineLearning = [
  {
    skillName: "PyTorch",
    Image: "/pytorch.svg",
    width: 60,
    height: 60,
  },
  {
    skillName: "TensorFlow",
    Image: "/tensorflow.svg",
    width: 60,
    height: 60,
  },
  {
    skillName: "OpenCV",
    Image: "/opencv.svg",
    width: 60,
    height: 60,
  },
];

export const devTools = [
  {
    skillName: "Git",
    Image: "/git.png",
    width: 60,
    height: 60,
  },
  {
    skillName: "VSCode",
    Image: "/vscode.png",
    width: 60,
    height: 60,
  },
  {
    skillName: "Bash",
    Image: "/bash.png",
    width: 60,
    height: 60,
  },
  {
    skillName: "Jupyter",
    Image: "/jupyter.png",
    width: 60,
    height: 60,
  },
  {
    skillName: "Github",
    Image: "/github.svg",
    width: 60,
    height: 60,
  },
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