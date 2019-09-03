module.exports = function (wallaby) {
    return {
      files: [
        'src/index.js'
      ],
      tests: [
        'src/index.test.js'
      ],
      env: {
        type: 'node',
        runner: 'node'
      },
      compilers: {
        '**/*.js': wallaby.compilers.babel(),
      },
      testFramework: 'jest'
    };
  };