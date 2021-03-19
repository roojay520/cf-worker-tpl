import { Router } from 'itty-router';

function getRandom(start = 1, end = 999) {
  var num = Math.floor(Math.random() * (end - start + 1) + start);
  return new Response(JSON.stringify({ num }));
}

async function handleRequest(request: Request) {
  const router = Router();

  router.get('*', () => getRandom());

  return router.handle(request);
}

export default handleRequest;
