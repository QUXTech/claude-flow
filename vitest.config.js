import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      'v3/**/*.test.{js,ts}',
      'v3/**/*.spec.{js,ts}',
    ],
    exclude: [
      '**/node_modules/**',
    ],
    globals: true,
    environment: 'node',
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
