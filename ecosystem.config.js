module.exports = {
  apps: [
    {
      name: 'client',
      script: 'yarn client dev',
    },
    {
      name: 'server',
      script: 'yarn server dev',
    },
    {
      name: 'storybook',
      script: 'yarn client storybook',
    },
  ],
};
