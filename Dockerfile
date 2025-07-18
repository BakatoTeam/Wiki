# Этап 1 — сборка сайта
FROM node:20-alpine as builder

WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Этап 2 — минимальный веб-сервер
FROM ghcr.io/static-web-server/static-web-server:latest

COPY --from=builder /app/build /public
