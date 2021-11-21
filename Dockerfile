FROM node:14

WORKDIR /src

RUN npm install -g codecov

COPY package.json /src
RUN npm install

COPY . /src
