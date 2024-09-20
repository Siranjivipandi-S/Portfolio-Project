# Git and GitHub Notes

## 1. Git Overview

- **Git** is a version control system used to track code changes and facilitate collaboration.

## 2. GitHub Overview

- **GitHub** is a cloud-based service that hosts Git repositories.

## 3. Setup Git Locally

- Install Git on your system.
- Set your username:
  ```bash
  git config --global user.name "John"
  ```

````

- Set your email:
  ```bash
  git config --global user.email "John@gmail.com"
  ```

## 4. GitHub Alternatives

- **Bitbucket**
- **GitBucket**

## 5. Create a GitHub Account and Repository

- Sign up for an account at [GitHub](https://github.com).
- Create a new repository (e.g., "example").

## 6. Create a File and Commit Changes

- Create a file (e.g., `new.txt`) and add some content.
- Commit your changes with a message:
  ```bash
  git commit -m "new file created"
  ```

## 7. Clone Repository in VS Code

- Open Visual Studio Code (VS Code).
- Clone the repository:
  ```bash
  git clone <repo-link>
  ```
- Navigate to the cloned directory:
  ```bash
  cd example
  ```

## 8. Track Changes and Push to GitHub

- Create a new file (e.g., `new2.txt`) in VS Code.
- Stage the file:
  ```bash
  git add new2.txt
  ```
- Commit the changes:
  ```bash
  git commit -m "commit message"
  ```
- Push the changes to GitHub:
  ```bash
  git push origin master
  ```

## 9. Modifying Files

- If a file is modified, follow these steps to update GitHub:
  **Add → Commit → Push**

## 10. Sync Changes from GitHub

- Use `git pull` to sync changes from the remote repository:
  ```bash
  git pull
  ```

## 11. Branching

- Create a new branch:
  ```bash
  git branch new-branch
  ```
- Switch to the new branch:
  ```bash
  git checkout new-branch
  ```
- Make changes, commit, and merge back to master:
  ```bash
  git merge new-branch
  ```

## 12. Collaboration

- Invite others to your repository and assign roles (e.g., contributor).
- Use **Pull Requests** to review and merge changes.

## 13. Security

- Use SSH keys for secure authentication.
- Enable two-factor authentication (2FA) for added security.

## 14. Backup and Automation

- Use **GitHub Pages** to host static websites.
- Use **GitHub Actions** to automate tasks and workflows.

```

````
