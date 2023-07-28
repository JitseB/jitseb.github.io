#!/bin/bash
while true; do
    read -p "Do you want to proceed deploying (y/n)? " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
bundle exec jekyll build
git stash
git checkout prod
git stash pop
mv ./_site/404/index.html ./_site/404.html
git --git-dir=.git --work-tree=_site add --all
git --git-dir=.git --work-tree=_site commit -m "autogen: update site"
echo "now push the prod branch via the GitHub app"
git reset --hard && git clean -f -d
git checkout master