# Go Visualizer

Interactive Go algorithm visualizer — step through 54 Go programs with annotated logic and two code approaches each.

## Deploy to Netlify (3 steps)

### Option A — Netlify Drop (fastest, no account needed)
1. Run `npm install && npm run build` locally
2. Drag the generated `/build` folder into [app.netlify.com/drop](https://app.netlify.com/drop)
3. Done — live in 30 seconds

### Option B — GitHub + Netlify (recommended for updates)
1. Push this folder to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Select your repo — Netlify auto-detects the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Click "Deploy site" — done

### Option C — Netlify CLI
```bash
npm install -g netlify-cli
npm install
npm run build
netlify deploy --prod --dir=build
```

## Local development
```bash
npm install
npm start
# Opens at http://localhost:3000
```

## Project structure
```
go-visualizer/
├── public/
│   └── index.html          # HTML shell
├── src/
│   ├── index.js            # React entry point
│   └── App.js              # Entire application (self-contained)
├── netlify.toml            # Netlify build + SPA redirect config
├── package.json
└── .gitignore
```

## What's inside
- 54 Go algorithm exercises across 10 difficulty tiers
- Interactive step-through visualizer for every exercise
- Two annotated code approaches per exercise
- Sincerity prompt before solution reveal
- Go language reference page
- Hitesh Choudhary YouTube playlist resource
- Mobile-first, zero backend, zero database
