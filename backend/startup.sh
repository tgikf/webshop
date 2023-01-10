#!/bin/bash

#yarn seed #uncomment to load seed data into db
#Run migrations to ensure the database is updated
npx medusa migrations run

#Start development environment
npx medusa develop