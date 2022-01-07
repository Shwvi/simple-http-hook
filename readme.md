# Simepl Http Hook

## Description

Provide a simple tool to create and trigge the http hook.

trigging the hook in browser based on axios, and the server based on koa.

## Install

```bash
npm install simple-http-hook
# or
yarn add simple-http-hook
```

## Example

### server

```ts
import { serverHooks } from "simple-http-hook";
const server = serverHooks.createHookServer();
server.registerHook("/message", ["GET", "post"], async (ctx) => {
  const body = (ctx.request as any).body;
  console.log(body);
  ctx.response.body = body;
});
server.listen(8888).then(() => {
  console.log("server started at 8888");
});
```

### browser

```ts
import { browserHooks } from "simple-http-hook";
export const trigger = browserHooks.createHookTrigger({
  baseURL: "http://localhost:8888",
});

export const postMessageTrigge = () =>
  trigger.triggePost("/message", {
      foo: 'bar
  });

```

## Features

- [x] support typescript
- [x] backend cors and bodyparser
- [ ] authorization control
- [ ] decorator
