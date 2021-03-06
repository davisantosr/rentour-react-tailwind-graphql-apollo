FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

# production=false =>> ts temporary error solution
RUN yarn install --production=false

COPY . .

RUN yarn build

CMD ["node", "server.js"]



