export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      // TODO: Add your custom /api/* logic here.
      return new Response("Ok");
    }
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    const resp = await env.ASSETS.fetch(request);
    if (resp.status !== 200) {
      return resp;
    }
    let body = await resp.text();
    body = "every page have this tips: <br/>" + body;
    return new Response(body, {
      status: resp.status,
    });
    // let resp = await env.ASSETS.fetch(request);
    // if (resp.status !== 200) {
    //   return resp;
    // }
    //return new Response("every page have this tips: <br/>" + resp.body);
    // let body = await resp.text();
    // body = "every page have this tips: <br/>" + body;
    // return new Response(body, {
    //   status: resp.status,
    // });
  },
};
