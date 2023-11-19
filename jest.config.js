module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@components(.*)$': '<rootDir>/src/components$1'
  }
};
