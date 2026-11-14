// ─────────────────────────────────────────────────────────────
//  All the content of the site lives in this one file.
//  Edit the text here and the page updates automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Akila Dilshan Edirisooriya",
  shortName: "Akila",
  role: "Software engineer with a finance background",
  intro:
    "I build web applications for finance teams. After ten years in the Finance Department at Sri Lanka Insurance Corporation General, I graduated in Software Engineering with First Class and now turn the manual processes I know well into working software.",
  photo: "/profile.jpg", // file: public/profile.jpg
  cv: {
    file: "/Akila_Edirisooriya_CV.docx", // file: public/Akila_Edirisooriya_CV.docx
    label: "Download CV",
  },
  email: "edirisooriyaakila@gmail.com",
  phone: "071 106 7856",
  phoneHref: "tel:+94711067856",
  location: "Hokandara, Sri Lanka",
  github: "https://github.com/AKILADILSHANED",
  githubLabel: "github.com/AKILADILSHANED",
};

export const about = {
  paragraphs: [
    "I'm a Software Engineering graduate (First Class, Cardiff Metropolitan University) who has spent the last ten years in the Finance Department of Sri Lanka Insurance Corporation General Limited. I started in receipting and cashiering, moved to bank reconciliation, and now work in the investment back office.",
    "Because I know how the money moves, I can turn finance requirements into clear technical specifications. I have worked with our ICT team and banking partners on payment API validation, SMS e-receipts and Excel-upload receipting, and I built the Cash Management Solution on my own, from requirements to deployment.",
    "I work across the stack with Java, Spring Boot, Next.js, React and MySQL. I learn quickly, enjoy replacing slow manual processes with reliable software, and I'm looking to grow as an engineer within a team.",
  ],
  facts: [
    ["based", "Hokandara, Sri Lanka"],
    ["currentRole", "Insurance Assistant, Finance Department"],
    ["company", "Sri Lanka Insurance Corporation General Limited"],
    ["degree", "BSc (Hons) Software Engineering, First Class"],
    ["focus", "Full-stack apps for finance and insurance"],
  ],
};

export const projects = [
  {
    id: "cash-management",
    title: "Cash Management Solution (SLICGL & SLICLL)",
    status: "Demo live, preparing for production",
    summary:
      "A web application that replaces the manual, Excel-based daily fund management process of the Investment Back Office. I designed and built it independently, with a Next.js frontend and a Spring Boot backend that talk through APIs, backed by a MySQL database. It cuts manual work and the paper cost of printed vouchers.",
    features: [
      "Daily fund requests",
      "Daily entry of bank account balances",
      "Fund allocation between bank accounts through transfers",
      "Approval and rejection of fund transfers",
      "Automatic generation of transfer vouchers",
      "Excess fund identification with repo initiation",
      "Daily cash-flow reports showing how inflows are used for payments and investments",
    ],
    tech: ["Next.js", "Spring Boot", "Java", "MySQL", "REST APIs"],
    url: "https://demo-cash-management-solution-five.vercel.app/",
    urlLabel: "demo-cash-management-solution-five.vercel.app",
    // Put your screenshots in  public/screenshots/  with these file names
    // (or change the names / captions below). Add or remove items freely.
    screenshots: [
      { src: "/screenshots/cash-management-1.png", caption: "Dashboard" },
      { src: "/screenshots/cash-management-2.png", caption: "Daily fund requests" },
      { src: "/screenshots/cash-management-3.png", caption: "Fund transfers and approvals" },
      { src: "/screenshots/cash-management-4.png", caption: "Transfer voucher" },
      { src: "/screenshots/cash-management-5.png", caption: "Daily cash-flow report" },
    ],
  },
  // To add another project, copy the block above, paste it here and edit it.
];

export const experience = {
  company: "Sri Lanka Insurance Corporation General Limited",
  role: "Insurance Assistant, Finance Department",
  period: "Jul 2016 – Present",
  path: [
    "Receipting and cashiering",
    "Bank reconciliation team",
    "Investment back office (current)",
  ],
  groups: [
    {
      id: "finance",
      label: "Finance operations",
      items: [
        "Manage daily fund collection and payment requirements, and invest excess funds after allocating funds to daily payments.",
        "Prepare end-to-end monthly bank reconciliations for multiple corporate bank accounts, consistently meeting tight reporting deadlines.",
        "Handled frontline receipt issuing and cashiering, processing premium payments in real time so agents could reach monthly targets on schedule.",
        "Coordinate with corporate bank representatives on official documents, regulatory forms and daily correspondence.",
      ],
    },
    {
      id: "systems",
      label: "Software and systems work",
      items: [
        "Work with the ICT development team to find, troubleshoot and fix bugs in existing financial systems, and design new features that improve department workflows.",
        "Work with ICT and the banks on API validation of policyholder payments against bank payment channels. Completed for some bank accounts, with rollout continuing for the rest.",
        "Helped develop the e-receipt system for Life and General Insurance, where policyholders download electronic receipts through an SMS link, reducing paper cost.",
        "Helped develop a system that automates life insurance receipting through Excel upload, reducing errors and the time spent on manual receipting.",
        "Designed and built the Cash Management Solution on my own, from requirements to deployment.",
      ],
    },
  ],
};

export const skills = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "REST API design"],
  },
  {
    id: "tools",
    label: "Data and tools",
    items: ["MySQL", "Git and GitHub", "Postman"],
  },
  {
    id: "concepts",
    label: "Concepts",
    items: [
      "Object-oriented programming",
      "Layered architecture",
      "API design and validation",
      "End-to-end application development",
    ],
  },
  {
    id: "domain",
    label: "Finance domain",
    items: [
      "Bank reconciliation",
      "Receipting and cashiering",
      "Fund management and investments",
      "Payment API validation",
      "Translating business needs into technical specs",
    ],
  },
];

export const education = [
  {
    year: "2026",
    title: "BSc (Hons) Software Engineering, First Class",
    place: "Cardiff Metropolitan University (UK), delivered at ICBT Campus, Sri Lanka",
  },
  {
    year: "2024",
    title: "Higher National Diploma in Software Engineering",
    place: "ESOFT Metro Campus",
  },
  {
    year: "2017",
    title: "Diploma in English",
    place: "Aquinas University College",
  },
  {
    year: "2012",
    title: "AAT, passed finalist",
    place: "Association of Accounting Technicians, Sri Lanka",
  },
];

export const sections = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];
