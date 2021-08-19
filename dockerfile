FROM node:14
ADD . /app
WORKDIR /app
RUN npm install
RUN apt-get update
RUN apt-get -y install default-jre
