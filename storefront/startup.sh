#!/bin/bash
printenv | grep NEXT
#build next project and startup
yarn next build
yarn start