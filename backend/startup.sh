#!/bin/bash

yarn seed #temporary
#Run migrations to ensure the database is updated
npx medusa migrations run

#Start development environment
npx medusa develop