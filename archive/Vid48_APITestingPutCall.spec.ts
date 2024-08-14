import { test, expect } from "@playwright/test"

test("API Testing - Put Call 1", async ({ request }) => {
    const respPut = await request.put("/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Wish",
            "lastname" : "Infinite",
            "totalprice" : 999,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Pan Cakes"
        }
    })

    const jsonresp = await respPut.json();
    console.log(jsonresp);
    expect(respPut.status()).toBe(200);
    expect(respPut.statusText()).toBe("OK");
    expect(respPut.ok()).toBeTruthy();
    expect(jsonresp).toMatchObject({
        firstname: 'Wish',
        lastname: 'Infinite',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Pan Cakes'
      })

      expect(jsonresp.additionalneeds).toEqual("Pan Cakes");

      //Get Call to just check the Updated details.
     const respGet = await request.get("https://restful-booker.herokuapp.com/booking/1");
     console.log(await respGet.json());
     expect(await respGet.json()).toMatchObject({
        firstname: 'Wish',
        lastname: 'Infinite',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Pan Cakes'
      })


})
