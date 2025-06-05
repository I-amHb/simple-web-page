# Simple-Web-Page
Simple web page that renders names of student, their class and grade.

# Git commands


## Command to start a repository
 To start a local repository the following command should be used in the root folder of the project. using the repo link of this project as example.

`> git init`

To link the local repo to the remote repo

`> git remote add https://github.com/I-amHb/simple-web-page.git`

## Command to clone repository

`>git clone https://github.com/I-amHb/simple-web-page.git `

## Saving changes to project
To save chnages made to project, use the commands add and commit commands. git add to stage changes made to the project. git commit to commit staged changes.

`> git add .`

`git commit -m "name of changes made"`

## Command to push to repo
After add and commit to save the changes made to local repo, git push is used to the remote repository.

`> git push`

## Creating and merging branches
To verify which branch is being used.

`> git branch`
To create a new branch and switch to it, the following command is used

`> git checkout -b new-branch` "new-branch being the name of the seperate branch"

after making any necessary modification add and commit it then check status to confirm using

`> git status`

To merge new branch new branch with main/master branch first switch to master/main branch using:

`> git checkout "main"`

then to merge both branches

`> git merge "new-branch"`



