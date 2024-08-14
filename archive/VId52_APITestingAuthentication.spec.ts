import { expect, test } from "@playwright/test"


let tokenValue;
test.beforeAll("Basic Auth", async ({ request }) => {
    const respToken = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })
    tokenValue = (await respToken.json()).token;
})

test("Authentication of Put Call using basic auth",async({request})=>{
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1",{
        headers:{
            Cookie:"token=" + tokenValue
        },
        data:{
            "firstname" : "WishInfinite",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    });

    expect(respPut.status()).toBe(200);
})

test("Authentication of Delete Call using basic auth",async({request})=>{
   const respDelete =  await request.delete("https://restful-booker.herokuapp.com/booking/1",{
        headers:{
            Cookie:"token=" + tokenValue
        }
    })
    expect(respDelete.status()).toBe(201);
})

// test("Authentication with API Key",async({request})=>{
//     const resp = await request.put("https://restful-booker.herokuapp.com/booking/1",{
//         headers:{
//             Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
//         },
//         data:{
//             "firstname" : "WishInfinite",
//             "lastname" : "Brown",
//             "totalprice" : 111,
//             "depositpaid" : true,
//             "bookingdates" : {
//                 "checkin" : "2018-01-01",
//                 "checkout" : "2019-01-01"
//             },
//             "additionalneeds" : "Breakfast"
//         }
//     })

//     expect(resp.status()).toBe(200);
// })