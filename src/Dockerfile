# Paso 1
FROM node:alpine AS customer-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Paso 2
FROM nginx:alpine
COPY --from=customer-app-build /app/dist/app-to-run-inside-docker /usr/share/nginx/html
EXPOSE 4200:80