# bchoii.github.io

git checkout --orphan temp
git commit -m "Initial commit"
git branch -D main # Deletes the main branch
git branch -m main # Rename the current branch to main
git branch -D temp # Deletes the temp branch
git push -f origin main # Force push main branch to github
git gc --aggressive --prune=all # remove the old files

//
git checkout --orphan temp <f> # checkout to the status of the git repo at commit f; creating a branch named "temp"
git commit -m "Initial commit" # create a new commit that is to be the new root commit
git rebase --onto temp <f> master # now rebase the part of history from <f> to master on the temp branch
git rebase --onto master <f1> <f2> # now rebase the part of history from <f1> to <f2> on the master branch
git branch -D temp # Deletes the temp branch

//
rm -rf .git
git init
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/bchoii/bchoii.github.io.git
git push -u --force origin main
git clone https://github.com/bchoii/bchoii.github.io

//
git push --mirror --force
// remove the old files
git gc --aggressive --prune=all

//
https://bchoii.github.io/

//
https://github.com/new

bchoii.github.io
