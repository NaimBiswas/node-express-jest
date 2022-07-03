const request = require("supertest");
const app = require("./app");

describe("Root Api", () => {
  it("GET / --> Root API", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            status: expect.any(String),
          })
        );
      });
  });
  it("should create a new post", async () => {
    const res = await request(app)
      .post("/")
      .send({
        name: expect.any(String),
        email: expect.any(String),
      });
    expect(res.statusCode).toBe(201);
  });
});
