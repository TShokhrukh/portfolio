/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: { resources: 'usable' },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg)$': 'jest-svg-transformer',
    '~/(.*)$': '<rootDir>/src/$1'
  }
}
