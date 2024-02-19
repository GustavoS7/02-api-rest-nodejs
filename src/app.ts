import { transactionRoutes } from "./routes/transaction";
import cookie from "@fastify/cookie";
import fastify from "fastify";

const app = fastify();

app.register(cookie);

app.register(transactionRoutes, {
  prefix: "/transactions",
});

export { app };
