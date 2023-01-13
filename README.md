# Webshop

This is a web shop based on [Medusa.js](https://medusajs.com/). At this point it's largely in line with the original templates from [`create-medusa-app`](https://www.npmjs.com/package/create-medusa-app) and consists of the following components:

1. [Backend instance](./backend/) with API endpoints (extensible instance integrated as dependency)
1. [Storefront](./storefront/) implemented in Next.js/React app (instantiated from template with slight modifications)
1. [Admin Frontend](./admin/) implemented in React (instantiated from template)
1. PostgreSQL DB which contains all data
1. AWS S3 Bucket which hosts static images (e.g., product images)

## Live Instance

The webshop infrastructure is spread across the following providers:

- **Amazon Web Services** (see [pricing](https://aws.amazon.com/s3/pricing/))
  - S3 Bucket for Images hosted in Asia Pacific (Singapore)
- **Railway.app** (see [pricing](https://docs.railway.app/reference/pricing))
  - Application services (Backend, Storefront, Admin Frontend)
  - PostgreSQL Database

### Links

- **Admin Frontend** \
  https://webshop-admin-production.up.railway.app/

- **Storefront** \
  https://webshop-storefront-production.up.railway.app/

## What's missing

- Memory leak because of missing Redis instance (either add Redis or wait for [new Medusa version](https://github.com/medusajs/medusa/issues/1651))
- No integration with payment providers
- No integration with fulfillment/shipping providers
- No search functionality
- No email verification
- No CMS for static content (e.g., About us, T&C, etc.)
- No custom APIs (complex change, if required)
- No event subscription functionality (complex change, if required)

# Technical Stuff

## ToDo

- Add search engine
- Add redis if required
- Figure out proper Docker setup to ensure `backend` is up and running for the `storefront` container build

## Helpful Commands

- Delete all local containers \
  `sudo docker ps -aq | xargs sudo docker stop | xargs sudo docker rm`
- Delete all local images \
  `sudo docker images -aq | xargs sudo docker image rm`

- Seed data (running container): \
  `sudo docker exec -it webshop-backend-container yarn seed` \
   Might also require `npx medusa migrations run`
