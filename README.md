# Academic Portfolio — Sai Sri Harsha Chakravarthula

This is a **complete** Next.js website adapted from your uploaded `harsha-portfolio` repository. This version improves the homepage, research, publication, teaching, experience, and contact wording. It preserves the light academic design, your portrait, CV PDF, existing publishing workflow, and other project files. Read `WORDING_UPDATES.md` for the detailed list of corrections. No Git history or dependency folders are included in this ZIP.

## Fastest way to update your EXISTING GitHub website

1. Download and **extract** `Harsha_Academic_Portfolio_Wording_Updated.zip` on your computer.
2. Open your original local Git repository folder (`harsha-portfolio`) on your computer (the one you used previously for `git push`).
3. Copy **everything inside the extracted ZIP** into that original repository folder, merging and replacing the existing files. **Keep the old hidden `.git` folder** so that it stays connected to your repository. The hidden `.github` folder from this ZIP must also be copied.
4. Open a terminal in your original repository folder and run:

   ```bash
   npm install
   npm run build
   git add -A
   git commit -m "Improve academic portfolio wording"
   git push origin main
   ```

5. On GitHub, open `https://github.com/chakravarthulaharsha/chakravarthulaharsha.github.io` > **Settings** > **Pages** > **Build and deployment** > **Source: GitHub Actions**. Enable this if not already set.
6. Open the **Actions** tab, select **Deploy Next.js to GitHub Pages**, and wait for the green check mark. If your push did not start a workflow, use **Run workflow**.
7. Visit **https://chakravarthulaharsha.github.io/**. Your browser may need a hard refresh (Ctrl+Shift+R) if you see an older version.

### Publish using only the GitHub website (without commands)

Open your existing repository > **Add file** > **Upload files**. Drag the **contents of the extracted folder**, not the ZIP itself, into the uploader, **including the `.github` folder and its nested workflow**. Confirm that the uploaded paths are in the root (`app/page.tsx`, `public/harsha-profile.webp`, `.github/workflows/deploy.yml`, etc.), not under an extra folder. Commit to `main`, then follow steps 5–7 above. Browser folder uploads do not always include hidden folders: if you cannot upload `.github/workflows/deploy.yml`, keep the one already in your repository or use the terminal method above.

## Test locally (optional)

Install Node.js 20.9 or later, open the project folder, then:

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Run `npm run build` before publishing to check the static build. GitHub Pages requires `output: "export"` in `next.config.ts`, which is already present. The `out/` folder is built and published automatically by `.github/workflows/deploy.yml`; **do not** upload `out/` manually.

## Edit later

- `app/page.tsx`: homepage text, research, publication entries, teaching, projects, and links
- `app/globals.css`: warm white + sage-green colors, typography, layouts, and mobile styles
- `app/layout.tsx`: site title and SEO metadata
- `public/harsha-profile.webp`: your profile photo
- `public/Sai_Sri_Harsha_Chakravarthula_CV.pdf`: the current CV link destination
- `.github/workflows/deploy.yml`: auto-deploys the site on pushes to `main`

The published and accepted paper information was carried over from the supplied website materials; **review it against your newest CV before using this as an official publication record.** Photo is your original photo, re-encoded as WebP without generative retouching. Fonts use Google Fonts when online, with fallbacks.

## Troubleshooting

- **404 at website**: Repo must be named exactly `chakravarthulaharsha.github.io`, Pages source must be GitHub Actions, and deployment must succeed.
- **Build failure**: Make sure `package-lock.json` and `package.json` were both included; run `npm ci && npm run build` in the repository. See error details in the GitHub Actions run.
- **Photo or CV missing**: Verify that `public/harsha-profile.webp` and `public/Sai_Sri_Harsha_Chakravarthula_CV.pdf` are committed on `main`.
- **Missing styles**: GitHub Pages must publish the built `out/` artifact. Do not set Pages to deploy from `main` / `/docs` for this Next.js project.
- **Security updates**: The original repo uses Next.js 15.5.4; check for a newer patched version before long-term maintenance and update the lockfile at the same time.
