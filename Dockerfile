FROM node:alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "./build/app.js"]