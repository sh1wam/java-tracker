# Java Roadmap Tracker (https://sh1wam.github.io/java-tracker/)

Static page (`index.html`) that saves your checklist progress to `progress.json` in this repo.

## Deploy
1. Create a GitHub repo and upload `index.html`, `progress.json`, `README.md`.
2. Repo Settings > Pages > Deploy from branch > `main` / root. Your site appears at `https://USERNAME.github.io/REPO/`.

## Enable permanent saving
1. GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate.
2. Repository access: only this repo. Permissions: Contents = Read and write.
3. Open your site, expand "GitHub sync", enter `username/repo` and the token, click Connect.

Each tick is committed to `progress.json` (after a 1.5s pause), so progress follows you across devices.
The token is kept only in that browser's localStorage. Use a token limited to this one repo, and don't use the page on shared computers.
