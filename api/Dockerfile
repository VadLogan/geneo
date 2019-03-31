FROM node:8.6-alpine

WORKDIR /usr/geneo/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "watch-server"]
