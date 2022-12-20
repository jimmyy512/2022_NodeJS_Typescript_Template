import express, { Express, Request, Response } from 'express';
const port = 8780;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log('now listening on port :', port);
});

function sayHello(person: string) {
  return 'Hello, ' + person;
}

const user = 'jim123';
console.log(sayHello(user));
