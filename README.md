# Sai Sri Harsha Chakravarthula — ePortfolio

A personal academic and technical ePortfolio built with Next.js.

## Run locally

1. Install Node.js 20.9 or newer.
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Deploy with GitHub + Vercel

1. Create a GitHub repository.
2. From this folder:

```bash
git init
git add .
git commit -m "Initial ePortfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect **Next.js** automatically.
6. Click **Deploy**.

## Updating the site

Edit the files and run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will redeploy automatically.

## Main files

- `app/page.tsx` — portfolio content
- `app/globals.css` — design and responsive styling
- `app/layout.tsx` — title, description, and metadata
- `public/Sai_Sri_Harsha_Chakravarthula_CV.pdf` — downloadable CV
