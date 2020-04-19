#base image
FROM node:alpine 

#install dependecies
WORKDIR /usr/visitorapp

COPY ./package.json ./
RUN npm install
COPY ./ ./

#start-up command
CMD npm start