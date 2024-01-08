FROM node:16.20.2-slim

WORKDIR /home

RUN apt update && \
    apt install openssl -y

COPY migrate.sh ./

COPY packages ./packages
COPY package.json package-lock.json lerna.json tsconfig.base.json ./
RUN npm ci
RUN npx lerna run build

CMD npx lerna run start --scope @anontown-backend/server --stream 
