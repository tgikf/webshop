FROM node:17.1.0

COPY . .

RUN yarn
RUN yarn build
RUN printenv
RUN printenv | grep MEDUSA
CMD ["yarn", "start"]