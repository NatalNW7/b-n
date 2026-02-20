---
description: # Git Commit and Push (Conventional Commits): Stages changes, generates a Conventional Commit message, and pushes to the remote.
---

## Steps

1. **Stage Changes:** Execute `git add .` to stage all current modifications.
2. **Analyze Diff:** Review the staged changes to identify the primary **Type** and **Scope**:
   - **feat:** A new feature (e.g., a new endpoint).
   - **fix:** A bug fix.
   - **docs:** Documentation only changes.
   - **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
   - **refactor:** A code change that neither fixes a bug nor adds a feature.
   - **chore:** Updating build tasks, package manager configs, etc.
   - **test:** Adding missing tests or correcting existing tests.
3. **Draft Message:** Compose the message in the format: `<type>(<scope>): <description>`.
   - _Example:_ `feat(api): add subscription endpoint`
   - _Example:_ `fix(prisma): resolve operating hours relation bug`
4. **Execute Commit:** Run `git commit -m "[Generated Message]"`.
5. **Push Changes:** Identify the current branch and run `git push origin [branch-name]`.
6. **Final Confirmation:** Confirm the successful push and provide the user with the commit hash.