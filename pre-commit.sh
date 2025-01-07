#!/bin/sh

npx lint-staged || exit
npm run lint || exit
