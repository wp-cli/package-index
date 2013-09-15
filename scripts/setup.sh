#!/usr/bin/env bash

# make another clone
REMOTE_URL=$(git config remote.origin.url)
git clone . web/
cd web/
git remote set-url origin $REMOTE_URL
git fetch
git checkout gh-pages

# install Satis
cd $HOME
curl -sS https://getcomposer.org/installer | php
php composer.phar create-project composer/satis --stability=dev --keep-vcs
