import Server from "./../server";

let buffer: string;

test('Server start Test', (): void => {;
    let options = {};
    let server = new Server(options);
    expect(server.start()).toBe("Starting");
});