module.exports = {
  'src/**/*.{ts,tsx}': () => 'yarn type-check',
  'src/**/*.{js,jsx,ts,tsx}': () => [
    'yarn lint',
    'yarn lint:css',
  ],
};

