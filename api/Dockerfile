FROM node:14.15-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./app

RUN npm install

COPY . ./app

EXPOSE 3000

CMD [ "node", "app.js" ]
