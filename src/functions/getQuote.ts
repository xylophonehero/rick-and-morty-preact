import { Handler } from "@netlify/functions";
import { handlePromise } from "../utils/handlePromise";
import fetch from "node-fetch"

interface ApiResponse
{
  data: string[]
}

const handler: Handler = async (event, context) =>
{
  const [data, err] = await handlePromise<ApiResponse>(fetch("http://loremricksum.com/api/?paragraphs=1&quotes=1")
    .then((res) => res.json()))
  if (err)
  {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Could not fetch quote" }),
    };
  }
  if (!data.data[0])
  {
    console.error("No quote found")
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "No quote could be found" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ quote: data.data[0] }),
  };
};

export { handler };