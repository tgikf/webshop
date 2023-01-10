FROM node:17.1.0
ARG MEDUSA_BACKEND_URL
COPY . .

RUN yarn
RUN yarn build
RUN printenv

CMD ["yarn", "start"]