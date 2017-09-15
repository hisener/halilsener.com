#!/bin/bash
set -e

zip -r deploy.zip build

curl -H "Content-Type: application/zip" \
    -H "Authorization: Bearer $NETLIFY_TOKEN" \
    --data-binary "@deploy.zip" \
    https://api.netlify.com/api/v1/sites/halilsener.netlify.com/deploys
