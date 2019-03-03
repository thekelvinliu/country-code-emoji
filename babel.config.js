module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets:
          process.env.NODE_ENV === 'test'
            ? { node: true }
            : 'maintained node versions',
      },
    ],
  ].filter(Boolean),
};
