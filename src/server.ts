import { transactionRoutes } from "./routes/transaction";
import cookie from "@fastify/cookie";
import fastify from "fastify";
import { env } from "./env";

const app = fastify();

app.register(cookie);

app.register(transactionRoutes, {
  prefix: "/transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server is running");
  });
