export const navItems = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
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
    title: "",
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
    title: "Gym.ai",
    des: "Gym.ai allows you to upload your own lifting videos and get personalized feedback on your exercise form.",
    img: "/gymai.png",
    iconLists: ["/re.svg", "/tail.svg", "/flask.svg"],
    link: "pitch.com/v/googlexmhacks-xtff53",
  },
  {
    id: 2,
    title: "Crypto Moon",
    des: "A website that allows users to track the top 10 cryptocurrencies by market cap. (Link loads slowly)",
    img: "/crypto-moon.png",
    iconLists: ["/ejs.svg", "/node.svg", "/express.svg"],
    link: "crypto-moon-uetp.onrender.com/",
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
    img: "/personal_website.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "jeremymoon.dev",
  },
];

export const languages = [
  {
    skillName: "C/C++",
    img: "/c++.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Python",
    img: "/python.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "JavaScript",
    img: "/js.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "TypeScript",
    img: "/ts.png",
    width: 70,
    height: 70,
  },
];

export const frontend = [
  {
    skillName: "HTML5",
    img: "/html.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "CSS3",
    img: "/css.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "TailwindCSS",
    img: "/tailwind.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "MaterialUI",
    img: "/mui.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "AceternityUI",
    img: "/aceternity.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "React",
    img: "/react.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Next.js",
    img: "/next.png",
    width: 70,
    height: 70,
  },
];

export const backend = [
  {
    skillName: "Node.js",
    img: "/node-js.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Express.js",
    img: "/express.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Flask",
    img: "/flask.svg",
    width: 70,
    height: 70,
  },
  // {
  //   skillName: "MongoDB",
  //   img: "/mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  // {
  //   skillName: "Firebase",
  //   img: "/Firebase.png",
  //   width: 55,
  //   height: 55,
  // },
  {
    skillName: "PostgresSQL",
    img: "/postgres.png",
    width: 70,
    height: 70,
  },
];

export const dataScience = [
  {
    skillName: "Pandas",
    img: "/pandas.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "NumPy",
    img: "/numpy.svg",
    width: 70,
    height: 70,
  },
  {
    skillName: "Matplotlib",
    img: "/matplotlib.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Scikit-Learn",
    img: "/scikit-learn.png",
    width: 70,
    height: 70,
  },
];

export const machineLearning = [
  {
    skillName: "PyTorch",
    img: "/pytorch.svg",
    width: 70,
    height: 70,
  },
  {
    skillName: "TensorFlow",
    img: "/tensorflow.svg",
    width: 70,
    height: 70,
  },
  {
    skillName: "OpenCV",
    img: "/opencv.svg",
    width: 70,
    height: 70,
  },
];

export const devTools = [
  {
    skillName: "Git",
    img: "/git.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "VSCode",
    img: "/vscode.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Bash",
    img: "/bash.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Jupyter",
    img: "/jupyter.png",
    width: 70,
    height: 70,
  },
  {
    skillName: "Github",
    img: "/github.svg",
    width: 70,
    height: 70,
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