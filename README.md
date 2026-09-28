# Cyber Notes

Personal cyber note-taking repo: HTB/CTF writeups, command cheatsheets, and technique notes, published as a static HTML/CSS/JS site.

- `writeups/` — CTF & HTB writeups
- `commands/` — command one-liners
- `techniques/` — technique notes

## Getting Started

Clone the repo and open `index.html` in a browser, or serve the folder with any static file server.

## Hosting

Deploy the folder to any static host — GitHub Pages, Cloudflare Pages, Netlify, Vercel, nginx, S3, etc.

## Structure

```
index.html          Overview / landing
writeups/           CTF & engagement writeups
commands/           Command one-liners (copy buttons)
techniques/         Technique notes
css/style.css       Site styling
js/app.js           Typewriter, sidebar, search, copy
src/images/         Screenshots for writeups
```

## Features

- Pure static — no build step, no backend, no dependencies
- Terminal-style UI with typewriter logo, sidebar navigation, and search
- Copy buttons on every code block
- Writeups sorted in an archive index with filters (Linux / Windows / Web / Other) and search