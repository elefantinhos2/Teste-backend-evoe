import { AppDataSource } from "../data-source";
import { DataSource } from "typeorm";
import app from "../app";
import request from "supertest";

describe("Teste para metodo DELETE em /users/:id", () => {
  let connection: DataSource;

  interface User {
    name: string;
    email: string;
    password?: string;
    age: number;
  }

  let testUser1: User = {
    name: "Douglas",
    email: "douglas@evoe.com",
    password: "123456Ab!",
    age: 21,
  };

  let response1: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    response1 = await request(app).post("/users").send(testUser1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Tentando deletar um usuário", async () => {
    const responseDelete = await request(app).delete(
      `/users/${response1.body.id}`
    );

    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toHaveProperty("message");
  });

  test("Tentando deletar um usuário que não existe", async () => {
    const response = await request(app).get(`/users/1`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});

describe("Teste para metodo GET em /users", () => {
  let connection: DataSource;

  interface User {
    name: string;
    email: string;
    password?: string;
    age: number;
  }

  let testUser1: User = {
    name: "Douglas",
    email: "douglas@evoe.com",
    password: "123456Ab!",
    age: 21,
  };

  let testUser2: User = {
    name: "Ugo",
    email: "ugo@evoe.com",
    password: "123456Ab!",
    age: 18,
  };

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/users").send(testUser1);
    await request(app).post("/users").send(testUser2);

    delete testUser1.password;
    delete testUser2.password;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Tentando listar todos usuários", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...testUser1,
          id: response.body[0].id,
          created_at: response.body[0].created_at,
          updated_at: response.body[0].updated_at,
        }),
        expect.objectContaining({
          ...testUser2,
          id: response.body[1].id,
          created_at: response.body[1].created_at,
          updated_at: response.body[1].updated_at,
        }),
      ])
    );
  });
});
