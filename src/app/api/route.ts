export async function POST(request: Request) {
  console.log("POST request received");
  console.log(request.body);
  const data = await request.json();
  console.log(data);
  // if (stream === undefined || stream === null) {
  //   return new Response("Bad Request", { status: 400 });
  // }
  // let reader = stream.getReader();

  // let result;
  // do {
  //   result = await reader.read();
  //   if (!result.done) {
  //     // Process the chunk (result.value)
  //     console.log(result.value);
  //   }
  // } while (!result.done);

  return new Response("OK", { status: 200 });
}
