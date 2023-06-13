const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/mock/**',
    '!**/cypress-coverage/**',
    '!**/jest-coverage/**',
    '!**/scripts/**',
    '!**/cypress/**',
    '!**/jest.config.js**',
    '!**/public/scripts/**',
    '!**/jest.setup.js**',
    '!**/next.config.js**',
    '!**/.eslintrc.js**',
    '!**/mocks/**',
    '!**/public/**'
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/cypress/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testTimeout: 20000,
  coverageDirectory: 'jest-coverage'
};