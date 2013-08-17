#!/usr/bin/env bash

REMOTE_URL=$(git config remote.origin.url)
git clone . web/
cd web/
git remote set-url origin $REMOTE_URL
git fetch
git checkout gh-pages
