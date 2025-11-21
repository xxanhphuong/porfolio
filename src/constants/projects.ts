export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imagePath: string;
  alt: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pizza 4PS",
    description:
      "A comprehensive restaurant management platform developed as part of an ODC (Offshore Development Center) project. As a Fullstack Developer, I contributed to building multiple web applications and backend services using NestJS, NextJS, and Svelte. The platform includes delivery web application, reservation system, loyalty program, booking management (BO), order management for delivery, store management, and various other modules. Built with modern tech stack including MongoDB and PostgreSQL databases.",
    technologies: [
      "NestJS",
      "NextJS",
      "Svelte",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
    ],
    imagePath: "/assets/images/4ps.png",
    alt: "Pizza 4PS Project",
    featured: true,
  },
  {
    id: 2,
    title: "Maison21G",
    description:
      "A luxury perfume store e-commerce platform featuring beautiful UI design and smooth animations. Built with Swagtail for dynamic UI components, creating an immersive shopping experience with elegant transitions and interactive elements that showcase the premium nature of the fragrance products.",
    technologies: ["NextJS", "Swagtail", "TypeScript", "CSS Animations"],
    imagePath: "/assets/images/project1.png",
    alt: "Maison21G Project",
    featured: true,
  },
];
