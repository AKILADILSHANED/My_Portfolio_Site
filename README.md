# Akila Dilshan Edirisooriya: portfolio

Single-page portfolio built with React and Vite. Dark mode by default, with a light/dark toggle.

## Run it on your computer

You need Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## What to edit

| What | Where |
| --- | --- |
| All text (intro, about, projects, experience, skills, education, contact) | `src/data.js` |
| Profile photo | replace `public/profile.jpg` (a larger, sharper photo looks best) |
| CV download | replace `public/Akila_Edirisooriya_CV.docx`, or add a PDF and change `profile.cv.file` in `src/data.js` |
| Project screenshots | put PNG/JPG files in `public/screenshots/` using the names listed under `screenshots` in `src/data.js` |
| Colours | the variables at the top of `src/styles.css` (one block for dark, one for light) |

Until a screenshot file exists, its slot shows a placeholder with the exact file name to add.

### Adding another project

In `src/data.js`, copy the whole project block inside `projects`, paste it below, and change the text, link and screenshots.

## Build and deploy

```bash
npm run build     # creates the dist/ folder
npm run preview   # test the built site locally
```

To publish on Vercel: push the project to GitHub, import the repository in Vercel, and keep the default
settings (Framework: Vite, Build command: `npm run build`, Output: `dist`). Then put the Vercel link in your CV.
