import { onRequest } from 'firebase-functions/v2/https';
  const server = import('firebase-frameworks');
  export const ssrcirclepuzzlegame1738 = onRequest({"region":"us-central1","maxInstances":3}, (req, res) => server.then(it => it.handle(req, res)));
  