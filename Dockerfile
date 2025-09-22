# First we'll build project.
FROM node:20-alpine AS builder
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Lets collect assets and run with nginx.
FROM docker.io/nginx:alpine
COPY --from=builder /usr/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]