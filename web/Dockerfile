FROM node:8.6-alpine

WORKDIR /usr/geneo/web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

