#!/bin/bash
set -e

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m\n"
git submodule foreach git pull

hugo && echo

cd ./public

URL="$(git config remote.origin.url)"

if [ ! -z "$GH_TOKEN" ]; then
  URL="$(echo "$URL" | sed "s,https://,https://$GH_TOKEN@,")"
fi

if [ "$TRAVIS_BRANCH" = "master" ]; then
  git add -A
  git commit -m "${1:-"Update $(env LANG=en_US date)"}"
  git push -qf "$URL" master
else
  echo "Skip publishing"
fi
