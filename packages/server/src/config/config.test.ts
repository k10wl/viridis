/* eslint-disable @typescript-eslint/no-var-requires,global-require */
describe('config test', () => {
  const OLD_ENV = process.env;

  const BOT_TOKEN_MOCKS = {
    PORT: '3000',
    MONGO_DATABASE_CONNECTION: 'MONGO_DATABASE_CONNECTION',
    MONGO_DATABASE_NAME: 'MONGO_DATABASE_NAME',
  };

  process.env.PORT = BOT_TOKEN_MOCKS.PORT;
  process.env.MONGO_DATABASE_CONNECTION =
    BOT_TOKEN_MOCKS.MONGO_DATABASE_CONNECTION;
  process.env.MONGO_DATABASE_NAME = BOT_TOKEN_MOCKS.MONGO_DATABASE_NAME;

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('should render env values', () => {
    const { CONFIG } = require('./index');

    expect(CONFIG.PORT).toBe('3000');
    expect(CONFIG.DEBUG_NAMESPACE).toBe('Viridis:server');
    expect(CONFIG.MONGO_DATABASE_CONNECTION).toBe('MONGO_DATABASE_CONNECTION');
    expect(CONFIG.MONGO_DATABASE_NAME).toBe('MONGO_DATABASE_NAME');
  });
});
