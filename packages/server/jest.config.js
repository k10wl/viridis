/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    'node_modules/variables/.+\\.(j|t)s': 'ts-jest',
  },
  testMatch: [
    '**/__tests__/**/*.(test|spec).[jt]s',
    '**/?(*.)+(test|spec).[jt]s',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@types(.*)$': '<rootDir>/src/types/index.ts',
  },
};
