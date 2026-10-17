# Content revisions — October 17, 2026

This release is based on the academic CV PDF included in the repository and the wording supplied for the public website. It keeps the existing sage-green layout, headshot, publication filters, CV, and GitHub Actions deployment workflow.

## Changes

- Removed the trailing period from the main name heading.
- Simplified the homepage and About section to explain the transition from healthcare AI to AI/edge security in natural, straightforward language.
- Removed forced newline characters from several section headings so the browser wraps text naturally on different screen sizes.
- Rewrote research descriptions to distinguish completed work from ongoing exploration, especially RAG security and PUF work.
- Changed the Publications intro from *selected papers* to *journal and conference papers*, because the list matches the publications shown in the included CV.
- Kept the exact publication titles, author lists, year, and published/accepted statuses from the included CV. No paper-status changes were inferred.
- Separated BlockShield and PUF-Based Device Security into two ongoing projects.
- Clarified teaching-assistant responsibilities instead of implying independent instructor duties.
- Added the omitted **Systems Engineer — Raster Technologies (2019)** role, matching the CV.
- Added month ranges for Teksolve and Cognizant experience, matching the CV.
- Included the Best Employee Award already listed in the CV.
- Shortened the Contact section and improved the teaching quotation punctuation.

## Verify before updating your public portfolio

The public repository's attached CV lists five papers as accepted and four as published as of October 17, 2026. Please confirm that the statuses and bibliographic details are still accurate at the time of publication. The attached CV labels UNT's SEED program as *Participant*, while the website says *Completed*, following your newer confirmation; update your CV to match if appropriate. Also check the names and descriptions for BlockShield, SideShield, and any ongoing research you have renamed.

## Publish

1. Extract the new ZIP. Copy its contents **into your existing local Git repository**, keeping the hidden `.git` directory that already exists. Copy the hidden `.github` directory from the update as well.
2. In a terminal in that repository, run:

   ```bash
   npm ci
   npm run build
   git add -A
   git commit -m "Refine academic portfolio content"
   git push origin main
   ```

3. Go to GitHub > Actions. Wait for **Build** and **Deploy** to succeed.
4. Open https://chakravarthulaharsha.github.io/ and refresh with Ctrl+Shift+R if an older version appears.

The ZIP is source code, not a ready-rendered HTML export. Your existing Actions workflow builds the site for GitHub Pages.
