# Lint & Format Templates

Use these templates to standardize linting and formatting across subrepos. Copy the files into each subrepo root, install the dev dependencies, and add the scripts shown below to `package.json`.

Files included:

- `.eslintrc.js` — ESLint config using `@typescript-eslint` and Prettier
- `.prettierrc` — Prettier configuration
- `.editorconfig` — EditorConfig for consistent editors

Recommended `package.json` snippets (add to `devDependencies` and `scripts`):

```json
"scripts": {
  "lint": "eslint \"src/**/*.{js,ts,tsx}\" --ext .ts,.tsx,.js,.jsx",
  "format": "prettier --write \"src/**/*.{js,ts,tsx,json,md}\""
},
"devDependencies": {
  "eslint": "^8.x",
  "prettier": "^2.x",
  "@typescript-eslint/parser": "^5.x",
  "@typescript-eslint/eslint-plugin": "^5.x",
  "lint-staged": "^13.x",
  "husky": "^8.x"
}
```

Optional: enable pre-commit checks using `husky` and `lint-staged`.

Steps for a subrepo:

1. Copy these files into the repo root.
2. Install dev deps: `npm install -D eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin lint-staged husky`
3. Add scripts to `package.json` and optional `lint-staged` config.
4. Add CI steps to run `npm run lint` and `npm run format -- --check`.
