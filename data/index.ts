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
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Coding Hours",
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
    link: "https://blogmoon-f26g.onrender.com/",
  },
  {
    id: 3,
    title: "Real vs. Fake Face Detector",
    des: "A trained EfficientNet-B5 model to determine whether a picture of a face is fake or not.",
    img: "/rvf.png",
    iconLists: ["/python.svg", "/pytorch.svg"],
    link: "https://docs.google.com/presentation/d/1dPoYFZlxFjBm6SLyaRf9dglWmkp154A-kizWcP0N7Hk/edit?usp=sharing",
  },
  {
    id: 4,
    title: "Project 4",
    des: "Description here",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const languages = [
  {
    skill_name: "C/C++",
    Image: "/c++.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    Image: "/python.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
];

export const frontend = [
  {
    skill_name: "HTML5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TailwindCSS",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MaterialUI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const backend = [
  {
    skill_name: "Node.js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    Image: "/flask.svg",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "MongoDB",
  //   Image: "/mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  // {
  //   skill_name: "Firebase",
  //   Image: "/Firebase.png",
  //   width: 55,
  //   height: 55,
  // },
  {
    skill_name: "PostgresSQL",
    Image: "/postgres.png",
    width: 70,
    height: 70,
  },
];

export const dataScience = [
  {
    skill_name: "Pandas",
    Image: "/pandas.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "NumPy",
    Image: "/numpy.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Matplotlib",
    Image: "/matplotlib.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Scikit-Learn",
    Image: "/scikit-learn.png",
    width: 60,
    height: 60,
  },
];

export const machineLearning = [
  {
    skill_name: "PyTorch",
    Image: "/pytorch.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "TensorFlow",
    Image: "/tensorflow.jpeg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "OpenCV",
    Image: "/opencv.png",
    width: 60,
    height: 60,
  },
];

export const devTools = [
  {
    skill_name: "Git",
    Image: "/git.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "VSCode",
    Image: "/vscode.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Bash",
    Image: "/bash.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Jupyter",
    Image: "/jupyter.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Github",
    Image: "/github.svg",
    width: 60,
    height: 60,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];