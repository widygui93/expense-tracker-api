FROM node:14

WORKDIR /expense-tracker-api
COPY package.json /expense-tracker-api
RUN npm install
COPY . /expense-tracker-api
CMD node app.js
EXPOSE 8080