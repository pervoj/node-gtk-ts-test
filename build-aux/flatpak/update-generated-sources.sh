#!/bin/bash

rm -rf node_modules/ && flatpak-node-generator -o build-aux/flatpak/generated-sources.json npm package-lock.json && npm install