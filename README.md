# Portfolio

Plain HTML/CSS. No build step.

## Editing
- **Text:** open `index.html` and change the words. Comments marked `EDIT` / `To add a project` show where.
- **Projects:** each project is its own page in `projects/`. Copy `projects/project-template.html`, rename it (e.g. `doctolib.html`), and fill it in using the blocks inside (cover, text, full image, two images, video). Then on `index.html`, point a card's `href` at it and set its cover image and title. Delete project-1…6 once you've replaced them.
- **Images:** drop your images into `images/`, then change `src="images/project-1.svg"` to your file name, e.g. `images/my-poster.jpg`. Landscape images around 1600px wide work best (keep them under ~500 KB).
- **Colours/fonts:** change the variables at the top of `style.css`.

## Preview on your computer
Double-click `index.html` to open it in your browser.

## Put it online (GitHub + Vercel)
1. Make a free account at github.com.
2. Click **+ → New repository**, name it `portfolio`, set it to Public, click **Create repository**.
3. On the next page click **uploading an existing file**, drag in *everything inside* this folder (index.html, style.css, script.js, README.md, the images and projects folders), then click **Commit changes**.
4. Go to vercel.com → **Sign up with GitHub**.
5. Click **Add New → Project**, pick `portfolio`, click **Import**, then **Deploy** (leave all settings as they are — Framework Preset: "Other").
6. You get a link like `portfolio-xyz.vercel.app`. Done.

## Updating later
Edit or upload files on GitHub (open the file → pencil icon, or **Add file → Upload files**) and commit. Vercel redeploys automatically within a minute.

## Custom domain (optional)
In Vercel: Project → **Settings → Domains** → add your domain and follow the DNS instructions.
