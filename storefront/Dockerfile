FROM node:17.1.0
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL

WORKDIR /app/storefront
COPY . .

RUN yarn
RUN yarn next telemetry disable
RUN yarn build

ENTRYPOINT ["yarn", "start"]