export default {
  async fetch(request, env) {
    const resp = await env.ASSETS.fetch(request);
    if (resp.status !== 200) {
      return resp;
    }
    let body = "test text whatever you want , it's this only: <br />" + resp.body;

    return new Response(body, {
      status: resp.status,
    });
    //return env.ASSETS.fetch(request);
  },
};
