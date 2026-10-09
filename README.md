# portfolio

Personal portfolio for Rajan Kashyap. Static HTML, CSS and JS with a liquid glass theme, no build step.

## Files

- `index.html`: all content (experience, projects, skills, awards, contact)
- `styles.css`: design tokens and the glass material (`.glass`)
- `script.js`: pointer-following highlight and active nav state
- `assets/profile.jpg`: profile photo

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Push to `main`.
2. In the repo, go to Settings, then Pages.
3. Under "Build and deployment", choose "Deploy from a branch", then `main` and `/ (root)`.
4. The site is published at `https://<username>.github.io/<repo>/`. To serve it at `https://<username>.github.io/`, name the repo `<username>.github.io`.
