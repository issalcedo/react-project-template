module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/jest.config.js'],
}