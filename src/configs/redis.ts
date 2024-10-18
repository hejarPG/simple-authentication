import { createClient } from "redis";

const redis = createClient({
  url: "redis://default:AVqsAAIjcDFhZTA5MTJmMDczYWU0N2MyOTBhYjRhNzI5YTliNDkyY3AxMA@pet-dove-23212.upstash.io:6379",
});

await redis.connect();

export default redis;
