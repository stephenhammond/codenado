                   . '@(@@@@@@@)@. (@@) `  .   '
         .  @@'((@@@@@@@@@@@)@@@@@)@@@@@@@)@
         @@(@@@@@@@@@@))@@@@@@@@@@@@@@@@)@@` .
      @.((@@@@@@@)(@@@@@@@@@@@@@@))@\@@@@@@@@@)@@@  .
     (@@@@@@@@@@@@@@@@@@)@@@@@@@@@@@\\@@)@@@@@@@@)
    (@@@@@@@@)@@@@@@@@@@@@@(@@@@@@@@//@@@@@@@@@) `
     .@(@@@@)##&&&&&(@@@@@@@@)::_=(@\\@@@@)@@ .   .'
       @@`(@@)###&&&&&!!;;;;;;::-_=@@\\@)@`@.
       `   @@(@###&&&&!!;;;;;::-=_=@.@\\@@     '
          `  @.#####&&&!!;;;::=-_= .@  \\
                ####&&&!!;;::=_-        `
                 ###&&!!;;:-_=
                  ##&&!;::_=
                 ##&&!;:=
                ##&&!:-
               #&!;:-
              #&!;=
              #&!-
               #&=
       jgs      #&-
                \\#/'
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# CODENADO

Online code collaboration tool


# Setup & Installation

1. Clone the repo into your local folder, e.g. `git clone <git-ssh>`
2. Run `meteor`
3. In your local browser, go to `http://localhost:3000/`


# Git Workflow:

**Never commit directly to master**. Instead, create small branches for each and every topic you work on (such as a feature or bug fix), and create a pull request into master when the branch is complete.

1. Make any edits to code
2. Checkout new branch. Name branches as concisely as possible, separated by underscores.

  `$ git checkout -b <branch-name>`
3. Commit work and add commit message.
  Write commit subjects in the present tense and as a command. Describe what the code change does, not what the code does.

  `$ git add --all`

  `$ git commit -m "Add Github login functionality"`
4. Push this branch to remote, or in our case Github `origin`

  `$ git push origin <branch-name>`
5. Create pull request in Github, mention any individuals if you want them to specifically take a look at the code. `@jedediahsmith`
6. Self merging is "okay" as long as you feel confident that the code doesn't break anything else. Default to having someone else merge your PR.


#### Ready to create pull request?

Great, you've been working and now are ready to create a pull request and get your code on Master. But wait! All while you've been working, your team has also been merging and committing. To ensure that your feature branch (which could be very old) is update to date with latest we need to resync master. Why? This way, your code changes your going to purpose are going to the latest code changes. It's a simple process!

1. Ensure your feature branch is clean with no file changes.

```
  $ git status

  On branch <feature-branch>
  Your branch is up-to-date with 'origin/<feature-branch>'.
  nothing to commit, working directory clean

```

1. Checkout Master branch and pull latest changes.

  `$ git checkout master && git pull`

  Now since master is up to date, let's sync these change with your feature branch.

2. Checkout feature branch

  `$ git checkout <feature-branch>`

3. Lastly, run the rebase command here which will play back history on your feature branch, effectively making your changes the latest.

  `$ git rebase master`

  You may run into **merge conflicts**! That's okay, resolve each of the conflicts, add them back, then continue the rebase.

4. Resolve conflicts in all your files
5. `$ git add <fixed-files-that-had-conflicts>`
6. `$ git rebase --continue` to keep continue along with the rebase.
