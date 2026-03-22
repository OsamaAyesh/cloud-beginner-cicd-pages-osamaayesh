# Cloud CI/CD Deployment

A professional static web page demonstrating a Continuous Integration and Continuous Deployment pipeline using GitHub Actions and GitHub Pages, built as part of a Cloud Computing course assignment.

---

## Live Demo

[https://OsamaAyesh.github.io/cloud-beginner-cicd-pages-osamaayesh/](https://OsamaAyesh.github.io/cloud-beginner-cicd-pages-osamaayesh/)

---

## Overview

This project showcases a fully automated deployment workflow where every push to the `main` branch triggers a GitHub Actions pipeline that builds and deploys the site to GitHub Pages with zero manual intervention.

The page includes:

- A clear explanation of CI/CD concepts (Continuous Integration and Continuous Deployment)
- A visual representation of the pipeline stages
- An interactive pipeline simulation with real-time animated terminal output

---

## Pipeline Stages

```
Commit & Push
     |
GitHub Actions Triggered
     |
Build & Validation Checks
     |
Deploy to GitHub Pages
     |
Live Site Updated
```

---

## Project Structure

```
cicdosamaayesh/
├── index.html        # Main HTML page (semantic HTML5)
├── style.css         # External stylesheet (dark theme, responsive)
└── script.js         # Pipeline simulation logic
```

---

## Technology Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| HTML5          | Semantic page structure          |
| CSS3           | Styling, animations, responsive layout |
| JavaScript     | Interactive pipeline simulation  |
| Google Fonts   | Poppins typeface                 |
| GitHub Actions | CI/CD automation workflow        |
| GitHub Pages   | Static site hosting              |

---

## Getting Started

### Prerequisites

- A GitHub account
- Git installed on your machine

### Run Locally

```bash
git clone https://github.com/OsamaAyesh/cloud-beginner-cicd-pages-osamaayesh.git
cd cloud-beginner-cicd-pages-osamaayesh
```

Open `index.html` in any modern web browser — no build tools or dependencies required.

### Deploy

Push any changes to the `main` branch and GitHub Actions will handle the deployment automatically.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## GitHub Actions Workflow

The workflow file (`.github/workflows/`) is configured to trigger on every push to `main`. It performs the following steps:

1. Check out the repository using `actions/checkout`
2. Validate the project structure
3. Deploy the static files to the `gh-pages` branch via GitHub Pages

---

## Course Information

| Field    | Detail            |
|----------|-------------------|
| Name     | Osama Ayesh       |
| Course   | Cloud Computing   |

---

## License

This project is submitted as an academic assignment. All rights reserved.

---

Mobile Engineer And Tech Lead — Osama Ayesh
