export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  icon?: string;
  color?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Engineer",
    company: "Tatinta",
    period: "July 2025 - Present",
    responsibilities: ["FullStack Developer"],
    icon: "fas fa-briefcase",
  },
  {
    id: 2,
    title: "Engineer",
    company: "Aegona Co., Ltd",
    period: "May 2019 - Present",
    responsibilities: ["Middle Front end Developer"],
  },
  {
    id: 3,
    title: "Engineer",
    company: "Kmin Academy",
    period: "2018",
    responsibilities: ["Junior front end Developer"],
    color: "green",
  },
  {
    id: 4,
    title: "Engineer",
    company: "Freelancer",
    period: "2018",
    responsibilities: ["Front end Developer, Designer"],
  },
  {
    id: 5,
    title: "Engineer",
    company: "Top On Seek (TOS) LTD.",
    period: "2017",
    responsibilities: ["Intern Front end Developer, Designer"],
  },
  {
    id: 6,
    title: "Computer Science",
    company: "Ho Chi Minh City Open University",
    period: "2014",
    responsibilities: [],
    icon: "fas fa-graduation-cap",
  },
];
