module.exports = {
  preset: 'jest-puppeteer',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/plugin.ts'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    // process ts with `babel-jest`
    '^.+\\.ts$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!nuxt-i18n).+\\.ts$'
  ]
}
