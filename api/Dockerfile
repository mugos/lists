FROM node:alpine

WORKDIR /usr/local/src

COPY package.json /usr/local/src

COPY yarn.lock /usr/local/src

RUN yarn install --force

COPY . /usr/local/src

EXPOSE 8000

CMD ["yarn", "start"]
