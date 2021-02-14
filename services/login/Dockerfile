FROM node:14.15-alpine

RUN mkdir /login

WORKDIR /login

COPY package*.json ./login

RUN npm install

COPY . ./login

EXPOSE 3002

CMD [ "node", "app.js" ]
