# Cyber Notes

Personal static website for cybersecurity learning notes (Write-ups, Commands, Techniques).

## How to use

1. Upload all files to a GitHub repository
2. Import the repository into Vercel
3. Add your subdomain (e.g. cybernote.yourdomain.com) in Vercel project settings

## How to add a new note

### For Write-ups:
1. Copy `writeups/sample-htb-machine.html`
2. Rename it (example: `writeups/my-machine.html`)
3. Edit the title and content
4. Add a new card link in `writeups/index.html`

### For Commands or Techniques:
Same process — copy an existing sample file and update the index page.

## Structure

- `index.html` → Home page
- `writeups/` → Machine / CTF write-ups
- `commands/` → Command cheatsheets
- `techniques/` → Technique notes
- `css/style.css` → Theme
