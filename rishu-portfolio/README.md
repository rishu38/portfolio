# Rishu Kumar | Portfolio

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide + EmailJS.

## Structure

```
rishu-portfolio/
├─ index.html              SEO meta, JSON-LD, fonts, theme script
├─ package.json  vite.config.js
├─ .env  .env.example      EmailJS variables (.env is git-ignored)
├─ public/
│  ├─ images/profile.jpg   your photo, resized to 900px wide
│  ├─ resume/Rishu_Kumar_Resume.pdf   PLACEHOLDER: replace it
│  └─ favicon.svg  robots.txt
└─ src/
   ├─ main.jsx  App.jsx  index.css
   ├─ data.js              all text, links and lists live here
   └─ components/          Navbar, Hero, About, Skills, Projects, Education,
                           Journey, Roadmap, GitHub, YouTube, Contact,
                           Loader, BackToTop, Footer, Section, Reveal
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # test the production build
```

## Fill in your own details (src/data.js)

- `hms.tech`: the technologies you used for the Hospital Management System
- `hms.github` and `hms.live`: your real links. While empty, GitHub opens your repositories page and Live Demo shows "soon"
- Resume: overwrite `public/resume/Rishu_Kumar_Resume.pdf` with your real PDF (keep the same file name)

## EmailJS setup

1. **Email Services**: connect your Gmail. The Service ID must be `service_m6ce6ii`.
2. **Email Templates**: open template `template_jehno6k` and set
   - **To Email**: `rishukumar387412@gmail.com`
   - **Reply To**: `{{email}}`
   - **From Name**: `{{name}}`
   - **Subject**: `{{subject}}`
   - **Content**, for example:
     ```
     From: {{name}} ({{email}})
     Subject: {{subject}}

     {{message}}
     ```
   The variable names must be exactly `name`, `email`, `subject`, `message`. They match the form field names.
3. **Account > General**: your Public Key is `eIDx6yfzcqlEeGsWY`. Never use your Private Key in this project.
4. **Account > Security**: if available on your plan, restrict allowed domains to your Vercel domain.
5. Test: run `npm run dev`, submit the form, and check your inbox. The green message appears only after EmailJS returns success.

The Service ID, Template ID and Public Key are designed to be visible in a browser app. Spam protection is a hidden honeypot field, a minimum time before submit, a 60 second cooldown between messages, and a lock against double submits.

## Deploy to Vercel

1. Push the project to GitHub (`.env` is git-ignored, so it is not uploaded).
2. On vercel.com choose **Add New > Project** and import the repository. Framework preset: **Vite** (build `npm run build`, output `dist`).
3. Under **Environment Variables** add all three, then deploy:
   - `VITE_EMAILJS_SERVICE_ID` = `service_m6ce6ii`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_jehno6k`
   - `VITE_EMAILJS_PUBLIC_KEY` = `eIDx6yfzcqlEeGsWY`
4. Changed a variable later? Redeploy, because Vite bakes them in at build time.
5. After you get your live URL, change `og:image` in `index.html` to the full URL (for example `https://your-site.vercel.app/images/profile.jpg`) so link previews show your photo.

## Deploy to GitHub Pages (alternative to Vercel)

1. Repo **Settings > Pages > Source: GitHub Actions**.
2. Keep `.github/workflows/deploy.yml` in the repo. Every push to `main` builds and publishes the site.
3. Live URL: `https://rishu38.github.io/portfolio/`
4. If you restricted EmailJS domains, add `rishu38.github.io`.
