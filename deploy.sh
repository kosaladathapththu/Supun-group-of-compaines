#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Preparing the Supun Group release. Existing services and data are preserved."
npm run typecheck
npm test
npm run lint
npm run build
echo "Build prepared in dist/. Follow docs/RELEASE_READINESS.md for hosting configuration."
