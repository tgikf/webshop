FROM node:17.1.0

WORKDIR /app/storefront
COPY . .

RUN yarn
RUN yarn next telemetry disable

ENTRYPOINT ["./startup.sh"]