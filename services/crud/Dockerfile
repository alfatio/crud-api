FROM node:14.15-alpine

RUN mkdir /crud

WORKDIR /crud

COPY package*.json ./crud

RUN npm install

COPY . ./crud

EXPOSE 3001

CMD [ "node", "app.js" ]
