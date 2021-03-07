module.exports = {
    testEnvironment: 'node',
    testEnvironmentOptions: {
      NODE_ENV: 'test',
    },
    restoreMocks: true,
    coveragePathIgnorePatterns: ['node_modules', 'app/config', 'app/server.js', 'tests'],
  };