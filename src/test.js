// import test from "node:test";
const { disconnectDB } = require("./libs/mongoose");
const app = require("./app");
const request = require("supertest");

describe("movies", () => {
  afterAll(async () => {
    await disconnectDB();
  });

  describe("Getting movies list", () => {
    test("It should response the 200 status", () => {
      return request(app)
        .post("/api/v1/movie")
        .send({
          filter: {
            page: 1,
            limit: 10,
          },
        })
        .set("Accept", "application/json")
        .expect(200);
    });
  });
});
