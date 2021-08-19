FROM node:14
FROM openjdk:8u302-jdk
ADD . /app
WORKDIR /app
RUN npm install
