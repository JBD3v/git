# Git basic commands

## Configure Git

```powershell
git config --global user.name "Jerome.Bark"
git config --global user.email "jerome.bark@fastmail.com"
git config --list
```

## New repo

```powershell
git init
git status
```

## Track and Store Changes

```powershell
git add <file_names or . for all files in current dir>
git commit 
git status
```

## Aliases

```powershell
git config --global alias.i init
git i
```

## Clone

```powershell
git clone <URL>
```

## Branch

```powershell
git checkout -b my_branch_1 # create my_branch_1 from current branch and swith to my_branch_1
git switch <branch>     # change to branch
git branch              # list current branches
branch -d <branch>      # delete branch
```

## Push to remote repo

```powershell
git push origin <branch>    # we push our branch to "origin" which points to the remote repository 
```

Pull Request - proposal to merge changes from one branch into another

## Pull

```powershell
git pull        # pulls most recent changes from current branch on remote repo
```

## Merge

```powershell
git switch/checkout <merge-receiving branch>
git merge <branch with changes to receive>
```

## Show

```powershell
git show            # show changes on bcurrent branch
```
