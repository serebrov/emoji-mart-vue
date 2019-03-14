FROM node:8

WORKDIR /src

RUN npm install -g codecov

COPY package.json /src
COPY yarn.lock /src
RUN yarn install

COPY . /src
