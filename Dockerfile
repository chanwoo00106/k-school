FROM node:16.15.1-alpine

WORKDIR /app

COPY ./yarn.lock ./package.json ./

RUN yarn install --frozen-lockfile

COPY ./index.js ./

ENTRYPOINT ["yarn", "start"]
