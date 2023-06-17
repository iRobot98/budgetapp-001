#!/bin/sh
echo "hello world"
nohup npx tailwindcss -i ./src/assets/css/_index.css -o ./src/assets/css/index.css --watch && disown
npm start