import { test, expect } from "@playwright/test"

test.describe("Describe Block for UI Mode Practice",async() =>{
    test("Test1 in Describe Block 1", async({})=>{
        console.log("Test1 in Describe block")
    })

    test("Test in Describe Block 2", async({})=>{
        console.log("Test2 in Describe block")
    })

    test("Test in Describe Block 3", async({})=>{
        console.log("Test3 in Describe block")
    })
})
