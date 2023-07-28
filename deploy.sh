#!/bin/bash
bundle exec jekyll build
mv ./_site/404/index.html ./_site/404.html
git --git-dir=.git --work-tree=_site add --all
git --git-dir=.git --work-tree=_site commit -m "autogen: update site"
echo "now push via the GitHub app"