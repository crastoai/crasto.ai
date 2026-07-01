# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- serve (nginx + fallback SPA) ----
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf 'server {\n  listen 80;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / { try_files $uri $uri/ /index.html; }\n  location ~* \.(js|css|png|jpg|jpeg|svg|webp|ico|woff2?)$ { expires 7d; add_header Cache-Control "public"; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
