FROM node:17.1.0

WORKDIR /app/backend

COPY package.json .
COPY startup.sh .
COPY yarn.* .

RUN apt-get update

RUN apt-get install -y python
RUN yarn add @medusajs/medusa-cli@latest

RUN yarn

COPY . .

ENTRYPOINT ["./startup.sh"]
