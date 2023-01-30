#!/bin/sh

set -ex

git clone --depth 1 https://github.com/amzn/selling-partner-api-models.git tmp-repo
mv tmp-repo/models ./tmp-models
rm -rf tmp-repo
node scripts/generate-client.js
rm -rf tmp-models