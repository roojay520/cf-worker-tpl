/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest() {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
