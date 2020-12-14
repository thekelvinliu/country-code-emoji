module.exports = {
  coverageReporters: ['html-spa', 'text'],
  testEnvironment: 'node',
  transform: { '\\.js$': './jest.esbuild.js' },
};
