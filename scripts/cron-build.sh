#!/usr/bin/env bash

# This script is run hourly by Cron.

# fail on first error
set -e

cd $(dirname $0)/..

# update the gh-pages branch
cd web/
git pull
git rm -r include
cd -

# update the master branch
git pull
CURRENT_REV=$(git rev-parse HEAD)

php ./scripts/prepare-satis.php

$HOME/satis/bin/satis build -vv --skip-errors

cd web/

# index.html will always have an updated timestamp, so commit only if there
# are some actual changes in the packages.

if git ls-files -m | grep 'packages.json'
then
	git add include
	git commit -am "build: $CURRENT_REV"
	git push origin gh-pages
fi
