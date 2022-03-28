import request from 'supertest';
import app from './app.js';
import {getAllPlants, getPlantName} from './models/plants.js'
import {beforeEach, afterAll} from "@jest/globals";
import {pool} from "./db/connection.js";


beforeEach(expect.hasAssertions)

afterAll(async()=>{
  await pool.end()
})


describe("check /plants route", () => {

    test("GET request should respond with a 200 status code", async () => {
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200)
    })

    test("GET request should return data containing objects with a watering property", async () => {
        const response = await request(app).get("/plants") 
        console.log(response.body)
        expect(response.body.payload[0]).toHaveProperty('watering')
      })

      test("GET request should respond with function defined", async () => {
        const response = await request(app).get("/plants")
        expect(getPlantName).toBeDefined()
      })

      test("GET request should respond with a GET status", async () => {
        const response = await request(app).get("/plants")
        expect(response.req.method).toBe('GET')
      })

})
