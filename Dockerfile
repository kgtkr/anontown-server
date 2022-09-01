FROM node:16.17.0-slim

WORKDIR /home

RUN apt update && \
    apt install openssl -y

COPY package.json package-lock.json ./
COPY packages/server/package.json packages/server/package-lock.json packages/server/prisma ./packages/server/
RUN npm ci

COPY packages ./packages
COPY tsconfig.json tsconfig.base.json ./
RUN npm run build

CMD npm start
