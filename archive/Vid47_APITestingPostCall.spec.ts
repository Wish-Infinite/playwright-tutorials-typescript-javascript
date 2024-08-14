import {expect, test} from "@playwright/test"

test("API Testing - Post Call 1", async({request})=>{
 const resp1 = await request.post("/booking",{
    data:{
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }
 })

 const jsonResp1 = await resp1.json();
 console.log(jsonResp1);
 expect(resp1.status()).toBe(200);
 expect(resp1.statusText()).toBe("OK");
 expect(resp1.ok()).toBeTruthy();
 expect(jsonResp1.booking).toMatchObject({
    firstname: 'Jim 1',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast 123'
  })

  expect(jsonResp1.booking.additionalneeds).toEqual("Breakfast")
})





test("API with UI Verification", async({request,page})=>{
    const resp2 = await request.post("https://api.demoblaze.com/addtocart",{
        data:{"id":"90f00e36-3cef-298d-a2bc-4405c36146fc","cookie":"user=7118f28c-60b6-0ff0-7ae7-18766ed162f6","prod_id":3,"flag":false}
    })
    
    expect(resp2.status()).toBe(200);

})