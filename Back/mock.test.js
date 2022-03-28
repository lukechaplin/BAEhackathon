import supertest from "supertest";
import app from "./app.js";
import {jest, afterAll, expect} from "@jest/globals";
import {pool} from "./db/connection.js";

const request = supertest(app)

const spyQuery = jest.spyOn(pool,'query').mockImplementation(() => {
  });

afterAll(async()=>{
    await pool.end()
})


describe("Test the /plants route", () => {

      describe("Test the /plants route", () => {

        test("returns data from GET request", async () => {
          spyQuery.mockResolvedValueOnce({ 
            rows: [
              {name:"Monstera",
              watering:"Every 1-2 Weeks",
              sunlight:"Low light or bright, indirect light",
              description:"Monsteras are unique, easygoing houseplants whose dramatic leaves are adorned with dramatic hole formations. Monsteras are vining plants and love to trail over the pot or climb along a stake or trellis. This plant will thrive in almost any environment, but if you want to give it a special treat, gently mist it once a week using a Mister. It’s best to mist your Monstera in the morning so the water has plenty of time to evaporate before evening."}]
        })
          const response = await request.get("/plants");
          expect(response.body.payload[0]).toHaveProperty("watering")
        });
      });

   
  });