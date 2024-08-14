import {test, expect} from "@playwright/test"

test("Delete Call For API Testing", async({request})=>{

    const respDelete = await request.delete("/booking/2");
    expect(respDelete.status()).toBe(201);
    const respDelText = await respDelete.text();
    console.log(respDelText);
    expect(respDelText).toEqual("Created");

    const respGet = await request.get("https://restful-booker.herokuapp.com/booking/2");
    console.log(respGet.status())
    expect(respGet.status()).toBe(404)

})