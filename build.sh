#!/bin/bash
# Build script - replaces version placeholders with Git commit hash

VERSION=$(git rev-parse --short HEAD)
echo "Building with version: $VERSION"

# Replace in index.html
sed -i "s/VERSION_PLACEHOLDER/$VERSION/g" index.html

# Replace in manifest.json
sed -i "s/VERSION_PLACEHOLDER/$VERSION/g" manifest.json

# Replace in sw.js
sed -i "s/VERSION_PLACEHOLDER/$VERSION/g" sw.js

echo "Done! Version: $VERSION"
