#base image
FROM node:alpine 

#install dependecies
WORKDIR /usr/visitorapp

COPY ./package.json ./
RUN npm install
COPY ./ ./

#To allow docker containers in the same network to connect
EXPOSE 9999

#start-up command
CMD npm start