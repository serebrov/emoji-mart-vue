FROM node:8

WORKDIR /src

COPY package.json /src
COPY yarn.lock /src
RUN yarn install

COPY . /src
