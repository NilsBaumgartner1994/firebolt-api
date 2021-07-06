import Server from './../server';

test('Server start Test', (): void => {
  const options = {};
  const server = new Server(options);
  expect(server.start()).toBe('Starting');
});

test('Failing Test', (): void => {
  expect('Incorrect').toBe('Starting');
});
