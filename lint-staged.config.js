module.exports = {
  "**/*.spec.{js,ts}": ["pnpm run format", "pnpm run lint", "pnpm run test"],
  "**/!(*.spec).{js,ts}": ["pnpm run format", "pnpm run lint"],
  "**/*.{json,md}": ["pnpm run format"],
};
