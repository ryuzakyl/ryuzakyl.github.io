---
title: Git Cheatsheet
---

:::tip

Basic knowledge of Git is assumed in this tutorial. If you are new to Git, visit [http://rogerdudler.github.io/git-guide/](http://rogerdudler.github.io/git-guide/) to learn the basics first.

:::

## Configurations

**Set the global username**
```bash
git config --global user.name "John Doe"
```

**Set the global user email**
```bash
git config --global user.mail "johndoe@domain.com"
```

**Set the local username**
```bash
git config --local user.name "John Doe"
```

**Set the local user email**
```bash
git config --local user.mail "johndoe@domain.com"
```

**To unset a given configuration**
```bash
git config --global --unset-all user.name
```

**To list global configurations**
```bash
git config --global --list
```

**To replace configurations**
```bash
git config --global --replace-all user.name "New User Name"
```

**To ignore file mode changes (i.e file permissions)**
```bash
git config core.fileMode false
```

**To ignore new line character differences between systems (windows-linux)**
```bash
git config --global core.autocrlf true
```

## Working with remotes

**List all the configured remote repositories**
```bash
git remote
```

**Remove a remote address for the repository**
```bash
git remote rm <remote>
```

**Change url of specific remote**
```bash
git remote set-url origin https://github.com/username/repo.git

git remote set-url upstream https://github.com/username/repo.git
```

**To push all your branches**
```bash
git push <remote> --all
```

**to push all your tags**
```bash
git push <remote> --tags
```

**prunes tracking branches not on the remote**
```bash
git remote prune origin
```

## Working with Branches

**List all the branches**
```bash
git branch
```

**List all the branches (local and repote branches)**
```bash
git branch --all
```

**Make a switch to a specified branch**
```bash
git checkout <branch>
```

**Deleting specified branch**
```bash
git branch -d <branch>
```

**Tracking a remote branch**
```bash
git branch -u <remote>/<branch>
```

**To remove all branches locally that have been already removed from origin**
```bash
git remote prune origin
```

**Sorting branches by date of last commit**
```bash
git branch --sort=-committerdate  # DESC
git branch --sort=committerdate  # ASC
```

```bash
git for-each-ref --sort=committerdate refs/heads/ --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) - %(contents:subject) - %(authorname) (%(color:green)%(committerdate:relative)%(color:reset))'
```

## Stashing

**Stash/save local changes**
```bash
git stash save "updated the offline file"
```

**Apply stashed changes (at the top of stack) to working dir**
```bash
git stash pop
```

**List stashed changes on the stack**
```bash
git stash list
```

## Reverting to previous states

### Reverting Files

**Showing file snapshot at specific commit*
```bash
git show <commit-sha>:relative/path/to/file/inside/repo
```

**Saving file snapshot at specific commit**
```bash
git show <commit-sha>:relative/path/to/file/inside/repo > /new/path/to/file/content/at/selected/commit
```

## Graph history visualization

**Showing last commit**
```bash
git log -1 
```

**Showing the current local history (-5 last five commits)**
```bash
git log --decorate --graph -5
```

**Showing commits after a specific date**
```bash
git log --date=local --after="2014-02-12T16:36:00-07:00"
```

## Miscelaneous

**Revert changes (i.e. restore to a pre-edited stage) to files named `AssemblyInfo.cs` on any folder of the repo**
```bash
$ git restore '**/AssemblyInfo.cs'
```

**Custom git command to list the last branches I've been working on**
```bash
$ last-branches = !git reflog show --pretty=format:'%gs ~ %gd' --date=relative | grep 'checkout:' | grep -oE '[^ ]+ ~ .*' | awk -F~ '!seen[$1]++' | hea
d -n 20 | awk -F' ~ HEAD@{' '{printf(\"  \\033[33m%s: \\033[37m %s\\033[0m\\n\", substr($2, 1, length($2)-1), $1)}'
```

**Git cherry-pick**
```bash
$ git cherry-pick 67c3ed592b3f1dcf50367550bf1d5537a2421b41
```

**Get specific file version content from a given branch (replaces file in working dir)**
```bash
$ git checkout develop -- OrdersServer/FormDevExpress/OrderTemplate/Controls/OrderControl.cs > /tmp/OrderControl.dev.cs

**This prints the file content to the console, which we can redirect to a file**
$ git show release-100.13:OrdersServer/FormDevExpress/OrderTemplate/Controls/OrderControl.cs > /tmp/OrderControl.13.cs
```

**Stash specific file**
```bash
$ git stash push -- OrdersServer/NewLaceupUI/MainForm.Designer.cs
```

**Stash specific file with custom message**
```bash
$  git stash push -m "temp store changes on MainForm Designer" OrdersServer/NewLaceupUI/MainForm.Designer.cs
```

**Add a message describing the changes made to the stash**
```bash
$ git stash save "message"
```

**Give the stash a name (stash label), you can use the `-m` option**
```bash
$ git stash save -m "My stash name"
```

**Remove configured `commit.template`**
```bash
$ git config --unset --local commit.template
```

**Revert the last N commits**
```bash
$ git checkout -f HEAD~16 -- .
```

This makes your code go back 16 commits in your local storage, without rewriting any history with those 16
commits. The "changes" (reverting the past 16 commits) should be at the staging area at this moment.

https://www.reddit.com/r/git/comments/ypnys6/i_want_to_revert_the_code_to_a_previous_commit/

## External links

* https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/

## Resources

- [Git Reference](https://git-scm.com/docs)
