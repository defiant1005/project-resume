#!/usr/bin/env sh

set -e

npm run build

cd dist


git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/defiant1005/project-resume.git master:gh-pages

cd -