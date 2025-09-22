# ⚛️ React Frontend Boilerplate

---

## 📝 Overview
Modern React + TypeScript frontend boilerplate with Vite, TailwindCSS, and testing infrastructure. Designed to integrate seamlessly with a TSOA backend.

---

## ✨ Features
- ⚛️ React + TypeScript  
- 🚀 Vite dev server and build  
- 🎨 TailwindCSS styling  
- 🛠 ESLint + Prettier  
- 🧪 Vitest + React Testing Library  
- 🌐 API client generation from backend Swagger/OpenAPI  
- 🐳 Docker & Docker Compose support  
- 📦 Nginx production setup  
- ⚡ CI/CD friendly

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

## 🛠 Recommended VSCode Extensions
- Tailwind CSS IntelliSense  
- ESLint  
- Prettier  

---

## ⚠️ Notes
- Unknown `@tailwind` warnings in VSCode are normal if Tailwind IntelliSense is not installed.  
- API client generation requires backend Swagger/OpenAPI JSON to be available.