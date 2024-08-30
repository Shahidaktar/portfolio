export const navItems = [
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  { name: "Achievements", link: "achieve" },
  { name: "Contact", link: "contact" },
];

export const skills = [
  {
    id: 0,
    name: "C",
    img: "/icons/c.svg",
  },
  {
    id: 1,
    name: "Java",
    img: "/icons/java.svg",
  },
  {
    id: 3,
    name: "Python",
    img: "/icons/python.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/icons/js.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    img: "/icons/typescript.svg",
  },
  {
    id: 6,
    name: "HTML",
    img: "/icons/html.svg",
  },
  {
    id: 7,
    name: "CSS",
    img: "/icons/css.svg",
  },
  {
    id: 8,
    name: "ReactJS",
    img: "/icons/react.svg",
  },
  {
    id: 9,
    name: "NextJS",
    img: "/icons/nextjs3.svg",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    img: "/icons/tailwind.svg",
  },
  {
    id: 11,
    name: "Bootstrap",
    img: "/icons/bootstrap.png",
  },
  {
    id: 12,
    name: "NodeJS",
    img: "/icons/node.svg",
  },

  {
    id: 13,
    name: "ExpressJS",
    img: "/icons/express2-js.svg",
  },
  {
    id: 14,
    name: "Flask",
    img: "/icons/flask1.svg",
  },
  {
    id: 15,
    name: "Firebase",
    img: "/icons/firebase.svg",
  },
  {
    id: 16,
    name: "MongoDB",
    img: "/icons/mongo.svg",
  },
  {
    id: 17,
    name: "SQL",
    img: "/icons/sql.svg",
  },
  {
    id: 18,
    name: "Git",
    img: "/icons/git.svg",
  },
  {
    id: 19,
    name: "GitHub",
    img: "/icons/github.svg",
  },
  {
    id: 20,
    name: "TensorFlow",
    img: "/icons/tf.svg",
  },
  {
    id: 21,
    name: "Keras",
    img: "/icons/keras.svg",
  },
  {
    id: 22,
    name: "OpenCV",
    img: "/icons/opencv.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "ShopZolo",
    img: "/images/shop.png",
    about: `ShopZolo is an eCommerce website featuring advanced product filtering, seamless cart management, secure Stripe integration, and a modern, data-driven admin panel.`,
    githubLink: "https://github.com/Shahidaktar/shopzolo",
    liveLink: "https://shopzolo.vercel.app/",
    iconLists: [
      "/icons/react.svg",
      "/icons/node.svg",
      "/icons/express.svg",
      "/icons/mongo.svg",
    ],
  },
  {
    id: 2,
    title: "HIRE",
    img: "/images/job.png",
    about: "HIRE is a Job Board application offering seamless job applications, detailed listings, personalized recommendations, and an intuitive admin panel with advanced resume ranking.",
    githubLink: "https://github.com/Shahidaktar/hire",
    liveLink: "https://hire-green.vercel.app/",
    iconLists: [
      "/icons/react.svg",
      "/icons/node.svg",
      "/icons/express.svg",
      "/icons/flask.svg",
      "/icons/mongo.svg",
    ],
  },
  {
    id: 3,
    title: "Resume Screening App",
    img: "/images/hiring.png",
    about: "It is an ML-powered app that recommends jobs based on user resumes.",
    githubLink: "https://github.com/Shahidaktar/resume-screening-app",
    liveLink: "https://resume-screening-app-yprc.onrender.com",
    iconLists: [
      "/icons/html.svg",
      "/icons/css.svg",
      "/icons/python.svg",
      "/icons/flask.svg",
    ],
  },
  {
    id: 4,
    title: "Heart Disease Prediction App",
    img: "/images/heart.png",
    about: "It is an ML-powered app that predicts heart disease risk using key health indicators.",
    githubLink: "https://github.com/Shahidaktar/heart-disease-prediction-app",
    liveLink: "https://heart-disease-prediction-app-mh0h.onrender.com",
    iconLists: ["/icons/python.svg", "/icons/stml.png"],
  },
  {
    id: 5,
    title: "Business Contract Validation",
    img: "/images/doc.png",
    about: "Business Contract Validation is a powerful tool designed to automate the classification of contract clauses and highlight similarities and differences between them.",
    githubLink:
      "https://github.com/SukantaOraw/PS-17-Business-Contract-Validation-by-Team-INVICTUS",
    iconLists: ["/icons/nextjs3.svg", "/icons/python.svg", "/icons/flask.svg"],
  },
  {
    id: 6,
    title: "Activity Tracker Extension",
    img: "/images/find.png",
    about: "It is your Chrome companion for defeating distractions. Track, limit, and regain control of your online time effortlessly.",
    githubLink: "https://github.com/Shahidaktar/activity-tracker-frontend-2024",
    iconLists: [
      "/icons/html.svg",
      "/icons/css.svg",
      "/icons/node.svg",
      "/icons/express.svg",
      "/icons/mongo.svg",
    ],
  },

  {
    id: 7,
    title: "Blood Bank App",
    img: "/images/blood.png",
    about: "It is a Full Stack application that enables users to donate blood at hospitals, promoting community health and support.",
    githubLink: "https://github.com/Shahidaktar/Blood-Bank-App",
    iconLists: [
      "/icons/react.svg",
      "/icons/node.svg",
      "/icons/express.svg",
      "/icons/mongo.svg",
    ],
  },
  {
    id: 8,
    title: "Groot",
    img: "/images/tree.png",
    about: `Groot is a Flutter app that detects plant diseases by analyzing leaf images.`,
    githubLink: "https://github.com/ArNAB-0053/Groot-App",
    liveLink: "",
    iconLists: [
      "/icons/flutter.png",
      "/icons/python.svg",
      "/icons/opencv.svg",
      "/icons/tf.svg",
    ],
  },

  {
    id: 9,
    title: "Resurate",
    img: "/images/resume.png",
    about: "Resurate is a NLP-based application designed to streamline the resume screening process, enabling faster and more accurate candidate-job matching.",
    githubLink: "https://github.com/ArNAB-0053/Resurate",
    iconLists: [
      "/icons/react.svg",
      "/icons/nextjs3.svg",
      "/icons/python.svg",
      "/icons/flask.svg",
    ],
  },
  {
    id: 10,
    title: "Online Code Compiler",
    img: "/images/compiler.png",
    about: "It is a Full Stack application leveraging JDoodle for secure, multi-language code execution, enhancing platform versatility.",
    githubLink: "https://github.com/Shahidaktar/Online-Code-Compiler",
    iconLists: ["/icons/react.svg", "/icons/node.svg", "/icons/express.svg"],
  },
  {
    id: 11,
    title: "Keep",
    img: "/images/taking.png",
    about: "Keep is a Note-Taking app designed for quick and easy note capture.",
    githubLink: "https://github.com/Shahidaktar/Keep-App",
    iconLists: [
      "/icons/react.svg",
      "/icons/nextjs3.svg",
      "/icons/tailwind.svg",
    ],
  },
  {
    id: 12,
    title: "Color XD",
    img: "/images/color.png",
    about: "It is a Flutter app that identifies the color of objects.",
    githubLink: "https://github.com/Shahidaktar/color_xd",
    iconLists: [
      "/icons/flutter.png",
      "/icons/python.svg",
      "/icons/opencv.svg",
      "/icons/tf.svg",
    ],
  },
];

export const achievements = [
  {
    quote: "Achieved 5th position in HustleX at IIM Lucknow.",
    name: "HustleX 1.0",
  },
  {
    quote: "Shortlisted for Grand Finale in Ideathon at IIM Bangalore.",
    name: "Ideathon",
  },
  {
    quote: "Attained 4th place in CipherThon 2.0 hosted by CipherSchools.",
    name: "CipherThon 2.0",
  },
  {
    quote:
      "Participated in Hackfest'24,IIT(ISM) Dhanbad, showcasing technology & innovation skills.",
    name: "Hackfest'24",
  },

  {
    quote: "Competed in Innovatrix: The Grand Hackathon hosted by NSEC,Kolkata",
    name: "Grand Hackathon",
  },
];
