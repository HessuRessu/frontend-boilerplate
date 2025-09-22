# 🚀 Frontend Boilerplate

Modern React + TypeScript + Vite + TailwindCSS boilerplate with testing, linting, Docker, and observability features.  
Designed to provide a fast start for scalable frontend applications.

---


## ✨ Features

- ⚛️ **React 19 + TypeScript 5**
- ⚡ **Vite 7** for ultra-fast bundling and HMR
- 🎨 **TailwindCSS 4** + PostCSS for styling
- 🧪 **Vitest** + Testing Library for unit/integration tests
- 🔍 **ESLint + Prettier** for clean, consistent code
- 🐳 **Docker** setup with Nginx serving production builds
- 📦 **Swagger API client generation**
- 📊 **Prometheus metrics exporter for Nginx**
- 🔒 **Dependabot** for automatic dependency updates

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```
npm install
```

### 2️⃣ Run development server
```
npm run dev
```

- Vite dev server listens on `0.0.0.0:5173` in Docker for container access.

### 3️⃣ Build for production
```
npm run build
```

### 4️⃣ Run tests
```
npm run test
```

### 5️⃣ Generate API client
- From local Swagger file:
```
npm run generate:api
```
- From backend URL (backend must be running):
```
npm run generate:api-url
```

---

## 🌿 Environment Variables
Configure environment variables in `.env`:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

---

## 🎨 TailwindCSS
TailwindCSS is preconfigured. Main CSS file:

```
src/index.css
```

Import it in `main.tsx`:
```
import './index.css';
```

---

## 📂 Project Structure
```
src/
  components/       # Reusable React components
  pages/            # Page components
  api/              # Generated API client
  hooks/            # Custom React hooks
  styles/           # Global styles
  App.tsx
  main.tsx
```

---

## 🐳 Docker & Nginx
- Multi-stage Docker build:
  - Stage 1: build with devDependencies installed
  - Stage 2: production image serves `dist` via Nginx
- Nginx listens on port 80

---

## ⚙️ CI/CD Workflows
- **Build & Test**: linting, build, tests
- **Coverage reporting**: TODO
- **Deployment**: Docker-based deployment

---

## 📊 Monitoring & Metrics

This boilerplate includes **Nginx Prometheus Exporter** for observability:

- Exposes Nginx metrics at `http://localhost:9113/metrics`
- Useful for scraping by Prometheus and visualizing in Grafana

---

## 🛠 Recommended VSCode Extensions
- Tailwind CSS IntelliSense  
- ESLint  
- Prettier  

---

## ⚠️ Notes
- Unknown `@tailwind` warnings in VSCode are normal if Tailwind IntelliSense is not installed.  
- API client generation requires backend Swagger/OpenAPI JSON to be available.