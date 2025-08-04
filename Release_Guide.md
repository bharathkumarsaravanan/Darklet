
# 📦 Releasing a New Version of `darklet` Component Library

This is your step-by-step guide to versioning and publishing updates to your component library.

---

## 🚀 STEP-BY-STEP: Releasing a New Component or Update

### ✅ 1. Make Your Code Changes

- Add or update your components
- Update docs/stories if needed
- Test locally using `storybook` or `vite`

---

### ✅ 2. Build the Library

```bash
npm run build
```

This runs: `tsc -b && vite build`  
→ Generates the latest `dist/` files

---

### ✅ 3. Update the Version

Use one of the following based on the type of change:

| Type                | Command              | Example Version     |
|---------------------|----------------------|----------------------|
| Bug fix / patch     | `npm version patch`  | `0.1.1 → 0.1.2`     |
| New feature         | `npm version minor`  | `0.1.2 → 0.2.0`     |
| Breaking change     | `npm version major`  | `0.2.0 → 1.0.0`     |

This command:
- Bumps version in `package.json`
- Commits the change
- Adds a Git tag

---

### ✅ 4. Push to GitHub

```bash
git push origin main --tags
```

✅ This pushes the code **and the version tag**

---

### ✅ 5. Publish to npm

```bash
npm publish --access public
```

> Make sure you're logged in with:  
> `npm login` (if you haven't already)

---

### ✅ 6. (Optional) Create GitHub Release

- Go to **https://github.com/USERNAME/darklet/releases**
- Click **"Draft a new release"**
- Pick the newly pushed tag (e.g., `v0.2.0`)
- Add a changelog or description
- Click **Publish**

---

## 🧠 TL;DR – Quick Release Cheat Sheet

```bash
npm run build
npm version patch      # or minor / major
git push origin main --tags
npm publish --access public
```

---

Happy shipping! 🚀