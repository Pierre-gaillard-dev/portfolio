# syntax=docker/dockerfile:1
# Build context: repository root (pnpm workspace + lockfile live there)
#   docker build -f apps/landing/Dockerfile .

ARG NODE_VERSION=24

# ---- base ----
FROM node:${NODE_VERSION}-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable
WORKDIR /repo

# ---- deps: only lockfile + manifests, so this layer stays cached until deps change ----
FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/landing/package.json apps/landing/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --filter @portfolio/landing...

# ---- build ----
FROM deps AS build
COPY apps/landing apps/landing
RUN pnpm --filter @portfolio/landing build

# ---- runtime: static files served by nginx ----
FROM nginx:stable-alpine AS runtime
COPY apps/landing/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/landing/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/healthz || exit 1
