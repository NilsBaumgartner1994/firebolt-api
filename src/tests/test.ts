import Server from './../server';
//import CoverageExample from "../coverageExample";

let buffer: string;

test('Server start Test', (): void => {
  const options = {};
  const server = new Server(options);
  //let cov = new CoverageExample(options);
  expect(server.start()).toBe('Starting');
});
