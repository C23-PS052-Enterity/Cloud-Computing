FROM node:14-alpine

WORKDIR /app/

COPY package*.json ./


RUN npm install

RUN npm run db-start

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]