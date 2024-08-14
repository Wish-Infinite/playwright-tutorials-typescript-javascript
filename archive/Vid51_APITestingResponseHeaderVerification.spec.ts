import { test,expect } from "@playwright/test";

test("Fetch and Validate Response Header", async ({ request }) => {
    const getResponse = await request.get("/booking/1")
    const headersValue = getResponse.headers();
    console.log(headersValue);
    expect(headersValue.server).toEqual("Cowboy");
    expect(headersValue["x-powered-by"]).toEqual("Express");

    console.log("*****************************************************************")

    const headersArrayValues = getResponse.headersArray();
    console.log(headersArrayValues);
    expect(headersArrayValues.length).toBe(11);
    headersArrayValues.forEach((header)=>{
        console.log(header.name + "::" +  header.value)
    })
})