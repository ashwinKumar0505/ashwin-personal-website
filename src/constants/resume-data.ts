export const EDUCATION_DETAILS: TDetails = [
  {
    title: "Bachelor of Engineering in Computer Science",
    description:
      "Graduate in the Computer Science Engineering with good graded and performance in the academics and also in the many extra curricular activities. Contributed excellence in the final year projects. ",
    year: "2016 - 2020",
    place: "Kongu Engineering College",
    percentage: "80",
  },
];

export const EXPERIENCE_DETAILS: TDetails = [
  {
    title: "Software Developer",
    year: "DEC 2021 - Current",
    place: "TEK Systems",
    description:
      "Working for the one of the popular Indian e-commerce company - TATA CLIQ.",
  },
  {
    title: "Software Developer",
    year: "AUG 2019 - NOV 2021",
    place: "Code Brahma",
    description:
      "Worked for the Accuknox client for their products. Worked on the Composer - drag and drop builder for the users who don't know how to code ",
  },
];

export const MAIN_SKILLS_DETAILS: { name: string; percentage: string }[] = [
  {
    name: "React JS",
    percentage: "95",
  },
  {
    name: "Node JS",
    percentage: "85",
  },
  {
    name: "MongoDB",
    percentage: "85",
  },
];

export const EXTRA_SKILLS_DETAILS: { name: string; percentage: string }[] = [
  {
    name: "HTML5 & CSS",
    percentage: "95",
  },
  {
    name: "Javascript",
    percentage: "90",
  },
  {
    name: "typescript",
    percentage: "90",
  },
  {
    name: "React Testing Library",
    percentage: "80",
  },
  {
    name: "React Native",
    percentage: "75",
  },
  {
    name: "AWS",
    percentage: "75",
  },
  {
    name: "Python",
    percentage: "70",
  },
  {
    name: "Django",
    percentage: "70",
  },
];

type TDetails = {
  title: string;
  year: string;
  description: string;
  place: string;
  percentage?: string;
}[];
