#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Building Supun Group website for production..."
npm run typecheck
npm run build
echo "Production frontend is in dist/. Existing .env, database and uploads were preserved."
