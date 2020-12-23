FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD [ "server", "-s", "build" ]