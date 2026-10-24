# Laura Phillips — Portfolio

Plain HTML/CSS. No build step. Live at https://lauraslavender.vercel.app/

## What's where
- `index.html` — homepage: intro, 6 featured projects, About, contact.
- `work.html` — the All work list (every project, newest first).
- `projects/` — one page per project. `project-template.html` is a blank starting point.
- `images/` — all images. Cards use `card-*.jpg` where there is a dedicated cover.
- `style.css` — colours and fonts are the variables at the top.

## Common edits
- **Change text:** open the file on GitHub, click the pencil icon, edit the words between the tags, Commit changes.
- **Change featured projects:** in `index.html`, edit the six `<a class="project">` blocks.
- **Add a project:** copy `projects/project-template.html`, rename it, fill it in, then add a row to `work.html`.
- **Add your CV:** upload your PDF to the main folder as `cv.pdf`, then in `index.html` remove the `<!--` and `-->` around the "Download CV" line.

## Updating the live site
Upload or edit files on GitHub and commit. Vercel redeploys automatically within a minute.
