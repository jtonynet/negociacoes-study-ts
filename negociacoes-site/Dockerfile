FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run compile

CMD ["npm", "run", "start:dev"]