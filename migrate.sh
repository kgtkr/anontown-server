#!/usr/bin/env bash
set -eu
cd packages/server
npx prisma migrate deploy
