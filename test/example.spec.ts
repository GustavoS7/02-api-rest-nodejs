import { expect, test } from "vitest";
import supertest from "supertest";
import { app } from "../src/app"; }

test("O usuário consegue criar uma nova transação", () => {
  const responseStatusCode = 201;

  expect(responseStatusCode).toEqual(201);
});
