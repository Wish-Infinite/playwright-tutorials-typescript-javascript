import { expect, test } from "@playwright/test";
import ApiJson from "../testdata/apidata.json";

test("API Testing - Pass Request body from JSON For Post Call", async ({
  request,
}) => {
  const respPost = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: ApiJson.postcalldata,
    }
  );
});

test("API Testing - Pass Request Payload from JSON for Put Call", async ({
  request,
}) => {
  const respPut = await request.put(
    "https://restful-booker.herokuapp.com/booking/1",
    {
      data: ApiJson.putcalldata,
    }
  );
  const respPutJson = await respPut.json();
  expect(respPutJson).toMatchObject(ApiJson.putcalldata);
  expect(respPutJson.firstname).toEqual(ApiJson.putcalldata.firstname);
});
