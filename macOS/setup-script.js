// This is very much a work in progress and not even a coherent script. Stubbing things out for a future date. 



// Change standard shell in terminal to bash, because we like bash
chsh -s /bin/bash

// Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

// Update git using Homebrew
brew install git
  // Configure git using GitHub
  git config --global user.name "githubUserName"
  git config --global user.email githubUserEmail

  // Confirm the Git default branch is set to "main"
  git config --global init.defaultBranch main

  // Tell Git to ignore .DS_Store files
  echo .DS_Store >> ~/.gitignore_global
  git config --global core.excludesfile ~/.gitignore_global

  // List SSH key if one exists
  ls ~/.ssh/id_ed25519.pub
  
  // Create SSH key if one doesn't exist 
  ssh-keygen -t ed25519

  // Get new SSH key
  cat ~/.ssh/id_ed25519.pub

  // Attempt to SSH to GitHub (following instructions from here: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection?platform=mac)
  ssh -T git@github.com

  // Does "fingerprint" = "SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU"? Yes or No
  TODO

  
