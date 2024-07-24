# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

# Base image for both dev and prod
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
EXPOSE 3000

# Dependencies stage
FROM base as deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm install -g npm@latest && npm ci --retry=5

# Production stage
FROM base as prod
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
CMD ["npm", "start"]
