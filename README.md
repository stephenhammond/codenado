# lhl_final_project

Online code collaboration tool

# Setup & Installation

1. Clone the repo into your local folder, e.g. `git clone <git-ssh>`
2. Run `meteor`
3. In your local browser, go to `http://localhost:3000/`


# Git Workflow: 

**Never commit directly to master**. Instead, create small branches for each and every topic you work on (such as a feature or bug fix), and create a pull request into master when the branch is complete.

1. Make any to code
2. Checkout new branch
	Name branches as concisely as possible, separated by underscores.
	
	`$ git checkout -b <branch-name>`
3. Commit work and add commit message.
	Write commit subjects in the present tense and as a command. Describe what the code change does, not what the code does.
	
	`$ git add --all`
	
	`$ git commit -m "Add Github login functionality"`
4. Push this branch to remote, or in our case Github `origin`
	
	`$ git push origin <branch-name>`
5. Create pull request in Github, mention any individuals if you want them to specifically take a look at the code. `@jedediahsmith`
6. Self merge is "okay" as long as you feel confident that the code doesn't break anything else. Default to having someone else merge your PR.
