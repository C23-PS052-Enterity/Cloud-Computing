FROM node:14-alpine

WORKDIR /app/

COPY package*.json ./

COPY enterity-service-key.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]