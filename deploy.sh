rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:MambaNeverOut/Vue3-ui-page.git &&
git push -f -u origin main &&
cd -
echo https://mambaneverout.github.io/Vue3-ui-page/