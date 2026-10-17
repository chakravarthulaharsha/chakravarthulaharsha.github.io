# Wording updates — October 17, 2026

This update keeps the existing light-green design, portrait, CV, publication filters, and GitHub Pages deployment workflow unchanged. Text was edited against the CV PDF included with the previous ZIP.

## What changed

- **Home:** Describes the Ph.D. as in progress (rather than implying it is completed), names the research areas clearly, and removes general marketing-style phrases.
- **About:** Adds a clearer progression from healthcare AI to cybersecurity in AI and connected systems. Simplifies academic degree labels and shows expected graduation in May 2027.
- **Research:** Uses specific, measured descriptions of LLM verification, secure edge deployments, RAG-based security, connected healthcare, and PUF-related work.
- **Publications:** Removes the contradictory label `OCIT (revision required)` from a paper marked Accepted, replacing it with `OCIT 2026`, as listed in the included CV. Formal paper titles and authors are preserved.
- **Projects:** Clarifies that BlockShield and PUF security are *ongoing* research and that LLMTrustChain has an *accepted paper*.
- **Teaching:** Keeps the language accurate for teaching assistant responsibilities and notes completed SEED professional development.
- **Experience and contact:** Replaces vague descriptions with clearer details, including SoapUI/Groovy work at Cognizant and HSCC school outreach.
- **Site metadata and footer:** Adjusts wording to present an in-progress doctoral degree and straightforward academic interests.

## Review before publishing

The published and accepted status of each paper is based on the CV already inside the supplied website files. If a paper's status has changed since that CV was created, update `app/page.tsx` before publishing. Scientific paper titles and existing DOI/link destinations were not altered.

## Publish

Copy the extracted ZIP's contents over your existing local `harsha-portfolio` Git repository, preserving its `.git` directory, then run:

```bash
git add -A
git commit -m "Improve academic portfolio wording"
git push origin main
```

Go to GitHub **Actions** and wait for the Pages deployment to show a green check. Visit https://chakravarthulaharsha.github.io and hard-refresh with Ctrl+Shift+R if needed.
