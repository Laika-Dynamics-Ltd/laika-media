import next from "next";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".next"] },
  next(),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.recommended,
    ],
    rules: {
      // Add or override rules as needed
    },
  }
);
