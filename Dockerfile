# syntax=docker/dockerfile:1.0.0-experimental

# shared for dev/prod
FROM node:14.5-alpine3.12 AS base

WORKDIR /code
COPY . .
RUN yarn

EXPOSE 7268

# development image
FROM base AS development

ENTRYPOINT ["yarn", "start"]
