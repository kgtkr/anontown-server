FROM node:16.17.0-slim

WORKDIR /home

RUN apt update && \
    apt install openssl -y

COPY package.json package-lock.json ./
COPY packages/server/package.json ./packages/server/
COPY packages/server/prisma ./packages/server/prisma
RUN npm ci

COPY packages ./packages
COPY lerna.json tsconfig.base.json ./
RUN npx lerna run build

CMD npx lerna run start --scope @anontown-backend/server --stream 
