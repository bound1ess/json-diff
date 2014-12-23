#!/usr/bin/env sh

echo "Running NPM..."; npm install;

echo "Running Bower-installer..."; bower-installer;

echo "Running Gulp"; gulp js sass html;

echo "Creating a new browser tab..."; sensible-browser "localhost:8000/public/index.html";

echo "Setting up a web server..."; php -S localhost:8000;
