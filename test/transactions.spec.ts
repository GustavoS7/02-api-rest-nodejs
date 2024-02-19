import { afterAll, beforeAll, test, describe } from "vitest";
import { app } from "../src/app";
import request from "supertest";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  test("User can create new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "any_transaction",
        amount: 1,
        type: "credit",
      })
      .expect(201);
  });
});
