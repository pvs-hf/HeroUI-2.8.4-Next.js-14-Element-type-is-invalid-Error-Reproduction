# HeroUI 2.8.4 + Next.js 14: "Element type is invalid" Error Reproduction

This repository demonstrates an error encountered when using @heroui/react v2.8.4 with Next.js 14.2.33. Rendering a HeroUI component (e.g., Button) results in the following error:

```
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```

The repo contains a minimal Next.js app with HeroUI set up as described in the official docs.
Steps to reproduce:

1. Clone the repo
2. Run npm install
3. Run npm run dev
4. Visit http://localhost:3000
