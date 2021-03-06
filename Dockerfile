FROM node:8

ARG version=1.0.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm i --production

COPY . .

RUN ./node_modules/.bin/tsc
RUN ./node_modules/.bin/babel --out-dir build build

CMD ["node", "./build/src/index.js"]
