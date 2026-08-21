# ConstructPro Frontend

Frontend-only React/Vite application. No backend server or API is required.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:8000`.

## Production build

```bash
npm run build
npm run preview
```

The built files are generated in `dist/`.

## Docker

```bash
docker build -t constructpro-frontend .
docker run --rm -p 8080:80 constructpro-frontend
```

Open `http://localhost:8080`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys automatically on every push to `main`.
In repository settings, open **Pages** and set **Source** to **GitHub Actions**.
