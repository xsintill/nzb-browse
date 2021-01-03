module.exports = {
  displayName: 'nzb-browse',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'svelte'],
  coverageDirectory: '../../coverage/apps/nzb-browse',
};
