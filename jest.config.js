/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  // preset: 'babel-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["<rootDir>/packages/[0-9a-zA-W-]+/{src,dist}/{_exec_generateDataModel,_exec_generateCQDataModel}.ts"],
  testPathIgnorePatterns: ["<rootDir>/packages/[0-9a-zA-W-]+/dist", "<rootDir>/node_modules/"],
  collectCoverageFrom: ["**/*.{ts,tsx}", '!**/node_modules/**', '!**/dist/**'],
  // transform: {
  //   '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
  // },
  // collectCoverage: true
};