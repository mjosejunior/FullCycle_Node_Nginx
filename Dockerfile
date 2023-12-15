FROM node:alpine

WORKDIR /usr/src/app

COPY node/package*.json ./

RUN npm install

COPY node/ .

CMD ["node", "index.js"]
