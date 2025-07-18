# Этап 1 — сборка сайта
FROM node:20-alpine as builder

WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Этап 2 — минимальный веб-сервер
FROM staticwebserver/static-web-server:2-alpine

COPY --from=builder /app/build /public
