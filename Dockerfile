# syntax=docker/dockerfile:1

FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json prisma ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "./build/server.js"]