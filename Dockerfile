FROM node:20.6.1

WORKDIR /usr/src/app

COPY node/package*.json ./

RUN npm install

COPY node/ .

CMD ["node", "index.js"]
