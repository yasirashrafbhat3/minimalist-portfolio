/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR PORTFOLIO CONTENT — edit this file to update the site.
 * ─────────────────────────────────────────────────────────────
 *  Everything you see on the website (name, intro, photo, about,
 *  projects, skills and contact links) comes from this one file.
 *  You never need to touch the design files to change your content.
 */

/* ── 1. Your photo ──────────────────────────────────────────────
 * Leave as `null` to show the placeholder.
 * To add your photo: put the image in the `public/` folder
 * (for example `public/yasir.jpg`) and set:  photo: "/yasir.jpg"
 */
export const profile = {
  name: "Yasir Ashraf Bhat",
  shortName: "Yasir",
  tagline: "Building with Data. Exploring AI.",
  role: "B.Tech Artificial Intelligence and Machine Learning Student",
  institution: "Atria Institute of Technology, Bengaluru",
  intro:
    "I am an aspiring Data Engineer and AIML student interested in building practical solutions through data, technology, and intelligent systems.",
  photo: null as string | null,
  photoAlt: "Portrait of Yasir Ashraf Bhat",
};

/* ── 2. About ─────────────────────────────────────────────────── */
export const about = {
  heading: "A student learning to build with data.",
  paragraphs: [
    "I'm originally from Kashmir and currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at Atria Institute of Technology, Bengaluru.",
    "My main interest is Data Engineering, with a growing interest in AI/ML. I learn best by doing: building practical projects, experimenting with new tools, and taking part in hackathons.",
  ],
  facts: [
    { label: "From", value: "Kashmir" },
    { label: "Studying", value: "B.Tech AIML" },
    { label: "College", value: "Atria Institute of Technology, Bengaluru" },
    { label: "Focus", value: "Data Engineering · AI/ML" },
  ],
};

/* ── 3. Projects ────────────────────────────────────────────────
 * To add a project, copy one block { ... } and change the text.
 * status: "In progress" | "Completed" | "Planned" | "Concept"
 * github: paste the repository link, or leave it out if there isn't one.
 */
export type ProjectStatus = "Completed" | "In progress" | "Planned" | "Concept";

export type Project = {
  title: string;
  description: string;
  status: ProjectStatus;
  statusNote?: string;
  tags: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Student Data Pipeline",
    description:
      "An ETL pipeline that processes student records from CSV files, built to practise data engineering fundamentals.",
    status: "In progress",
    statusNote: "Extract and transform stages done. MySQL loading and SQL analysis planned.",
    tags: ["Python", "CSV", "ETL"],
    github: "https://github.com/yasirashrafbhat3/student-data-pipeline-project",
  },
  {
    title: "CleanSlate",
    description: "A Python utility that validates and cleans CSV data before it is used.",
    status: "In progress",
    statusNote: "Console app implemented and tested. Streamlit web version planned.",
    tags: ["Python", "CSV", "Data Cleaning"],
    github: "https://github.com/yasirashrafbhat3/CleanSlate",
  },
  {
    title: "Corporate Expense Anomaly Auditor",
    description:
      "An academic project that identifies unusual expense patterns and analyses department spending.",
    status: "In progress",
    statusNote: "Academic project in development.",
    tags: ["Python", "Pandas", "K-Means", "Data Analytics"],
  },
  {
    title: "DataDrift",
    description:
      "A concept for an AI-powered data intelligence platform with dashboards, data quality checks, anomaly detection and forecasting.",
    status: "Concept",
    statusNote: "Proposed project — not yet built.",
    tags: ["AI/ML", "Data Quality", "Forecasting"],
  },
];

/* ── 4. Skills (things I'm currently developing) ─────────────── */
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "Java"] },
  { group: "Data", items: ["Data Analysis", "Pandas", "NumPy", "Excel", "MySQL"] },
  { group: "AI / ML", items: ["Machine Learning fundamentals"] },
  { group: "Tools", items: ["Git", "GitHub"] },
];

/* ── 5. Contact ─────────────────────────────────────────────────
 * Leave a value as `null` to show "Coming soon".
 * Example:  linkedin: "https://www.linkedin.com/in/your-name"
 *           email: "you@example.com"
 */
export const contact = {
  github: "https://github.com/yasirashrafbhat3" as string | null,
  linkedin: null as string | null,
  email: null as string | null,
};

/* ── Navigation (section ids must match the sections on the page) */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
